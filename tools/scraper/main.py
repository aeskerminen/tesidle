from bs4 import BeautifulSoup
from requests import get

import re
import json

base_url = "https://elderscrolls.fandom.com"

urls = ["https://elderscrolls.fandom.com/wiki/Category:Skyrim:_Characters",
        "https://elderscrolls.fandom.com/wiki/Category:Skyrim:_Characters?from=Camilla+Valerius",
        "https://elderscrolls.fandom.com/wiki/Category:Skyrim:_Characters?from=Gelebros",
        "https://elderscrolls.fandom.com/wiki/Category:Skyrim:_Characters?from=Kjeld+%28Skyrim%29",
        "https://elderscrolls.fandom.com/wiki/Category:Skyrim:_Characters?from=Old+Orc",
        "https://elderscrolls.fandom.com/wiki/Category:Skyrim:_Characters?from=Student+%28Skyrim%29"]

request = get(urls[0])

characters_base_route = BeautifulSoup(request.content, "html.parser")

characters_parent_elem = characters_base_route.find("div", "category-page__members").find_all("a", class_="category-page__member-link")

character_urls = []

for char in characters_parent_elem:
    postfix = char['href']
    char_url = base_url + postfix
    character_urls.append(char_url)


character_list = dict()

for url in character_urls[9:]:
    char_request = get(url)
    char_soup = BeautifulSoup(char_request.content, "html.parser")
    name_box = char_soup.find("h1", id="firstHeading")
    info_box = char_soup.find("div", class_="mw-parser-output").find_next("aside").find_next("section").find_all("div", "pi-item pi-data pi-item-spacing pi-border-color")
    stats = dict()
    name = re.sub(r"[\n\t]*", "", name_box.string)
    name = name.replace("(Skyrim)", "").strip()
    stats["Name"] = name
    for x in info_box: 
        label = x.find("h3")
        data = x.find("div")
        if data is not None and label is not None:
            if len(list(data.children)) > 1:
                stats[label.string] = [x.string for x in data.find_all('a')]
            else:
                stats[label.string] = data.string
    stats.pop("Ref ID", None)
    stats.pop("Base ID", None)
    stats.pop("Level", None)

    character_list[name] = stats

character_stats_json = json.dumps(character_list, indent=3)

with open("../../src/data/characters.json", "w") as file:
    file.write(character_stats_json)