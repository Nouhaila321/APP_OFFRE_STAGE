from bs4 import BeautifulSoup 
import requests
import pandas as pd

import pymongo 
from pymongo import MongoClient 


cluster= MongoClient('mongodb+srv://nouhaila:NOUHA2409@cluster0.rikvx.mongodb.net/offre_stage?retryWrites=true&w=majority')
db = cluster['offre_stage']
collection = db['offre_stage']



collection.delete_many({})


for i in range(50):
	i=i+1
	URL='https://www.regionsjob.com/emploi/recherche?d=all&k=D%C3%A9veloppeur%20informatique&k_autocomplete=Informatiique&c=Stage&p={}'
	lien = requests.get(URL.format(i))
	soup = BeautifulSoup(lien.content,'html.parser')
	
	for offre in soup.find_all('li', class_='action crushed autonome autopadding'):
		 
		societe = offre.div.find('div', class_ ='offer--content').div.span.get_text()
		description = offre.div.find('div', class_ ='offer--content').div.h3.get_text().strip()
		URL_stage = offre.div.find('div', class_ ='offer--content').div.h3.a.get('href')
		insrt = {"societe": societe, "description":description, "URL_stage": URL_stage}
		collection.insert_one(insrt)

print('DONE')
	
