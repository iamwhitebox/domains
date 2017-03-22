FROM mongo

COPY seed.json /seed.json
CMD mongoimport --host reduxcrud --db reach-engine --collection domains --type json --file /seed.json --jsonArray