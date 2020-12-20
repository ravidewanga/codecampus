const { string } = require('yargs');
const yargs = require('yargs');
const utils = require('./utils');

yargs.command({
    command:'add',
    describe:'Add new students',
    builder:{
        name:{
            description:'Note Body',
            demandOption:true,
            type:'String'
        },
        contact_no:{
            description:'Note Body',
            demandOption:true,
            type:'String'
        },
    },
    handler: function(argv) {
        utils.addStudent(argv)
    }
})


yargs.command({
    command:'list',
    describe:'Student List',
    handler:function(argv){
        var list = utils.getStudent();
        if(list != ''){
            console.log(list);
        }else{
            console.log('Record not found.');
        }
    }
})

yargs.command({
    command:'remove',
    describe:'Delete Student Records',
   builder:{
       contact_no:{
           description:'Delete students details',
           demandOption:true,
           type:string
       },
   },
   handler:function(argv){
        utils.removeStudent(argv.contact_no);
   }
})

yargs.parse();