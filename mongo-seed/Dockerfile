FROM mongo

COPY seed.json /seed.json
CMD mongoimport --host mongodb --db reduxcrud --collection domains --type json --file /seed.json --jsonArray