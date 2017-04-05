FROM mongo

COPY seed.json /seed.json
CMD mongoimport -h ds137370.mlab.com:37370 -d domains -c domains -u admin -p admin --file /seed.json --jsonArray