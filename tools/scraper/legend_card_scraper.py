from bs4 import BeautifulSoup
from requests import get

from string import ascii_uppercase

base_url = "https://elderscrolls.fandom.com"
card_link_elements = []
card_links = []
card_list = dict()

# for char in ascii_uppercase:
request = get(
    f"https://elderscrolls.fandom.com/wiki/Category:Legends:_Cards?from={'A'}")
card_base_page = BeautifulSoup(request.content, "html.parser")
links = card_base_page.find("div", "category-page__members").find_all(
    "a", class_="category-page__member-link")
card_link_elements.extend(links)

for char in card_link_elements:
    postfix = char['href']
    char_url = base_url + postfix
    card_links.append(char_url)

for card in card_links[5:]:
    request = get(card)
    card_page = BeautifulSoup(request.content, "html.parser")
    info_box = card_page.find("div",
                              class_="mw-parser-output").find_next("aside")
    stats_dict = dict()
    name = info_box.find("h2")
    if name is None:
        continue
    else:
        name = name.string
    stats_dict["Name"] = name
    stats = info_box.find_all(
        "div", class_="pi-item pi-data pi-item-spacing pi-border-color")
    for i in range(6):
        if i < len(stats):
            label = stats[i].find("h3")
            if label is not None:
                label = label.string
                match label:
                    case "Set":
                        value = stats[i].find_next("div").find_all("a")
                        if len(value) > 1:
                            value = value[1].string
                        else:
                            children = stats[i].find_next("div").children
                            value = [x for x in children][1].strip()
                    case "Type":
                        value = stats[i].find_next("div").find("a").string
                    case "Subtype":
                        value = stats[i].find_next("div")
                        if type(value.string) != None:
                            value = value.string
                        else:
                            value = value.find_next("a").string
                    case "Attribute(s)":
                        value = stats[i].find_next("div").find_all("a")
                        if len(value) <= 2:
                            value = value[1].string
                        else:
                            temp = []
                            for i in range(1, len(value), 2):
                                temp.append(value[i].string)
                            value = temp
                    case "Class":
                        value = stats[i].find_next("div")
                        if type(value.string) != None:
                            value = value.string
                        else:
                            value = value.find_next("a").string
                    case "Rarity":
                        children = stats[i].find_next("div").children
                        value = [x for x in children][1].strip()
                
                stats_dict[label] = value
    print(stats_dict)
    card_list[name] = stats_dict
