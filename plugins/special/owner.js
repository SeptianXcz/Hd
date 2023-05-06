exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: '9Knatzz',
         website: 'https://-',
         email: '5mb.9Knatzz@yahoo.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}