const { Client } = require('@notionhq/client');

const notion = new Client({ auth:'secret_4SynMqjibUnlCG1AFRxDcooW4d3j1eNotN3z0y47s3V' });

(async () => {
  const databaseId = 'ff9114838d834e26b6c56d2c6423db06';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'In stock',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Cost of next trip',
          number: {
            greater_than_or_equal_to: 2,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Last ordered',
        direction: 'ascending',
      },
    ],
  });
  console.log(response);
})();