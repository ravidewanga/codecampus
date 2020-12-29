const yargs = require('yargs');
const weather_report = require('./weather');
yargs.command({
    command: 'weather',
    describe: 'Showing weather report',
    builder: {
        address: {
            description: 'Note Body',
            demandOption: true,
            type: 'String'
        },
    },
    handler: function (argv) {
        weather_report.getReport(argv.address);
    }
})

yargs.parse();