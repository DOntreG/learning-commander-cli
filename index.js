#!/usr/bin/env node
'use script'

const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');

program
  .version('0.1.0', '-v, --version')
  .usage(' ');
  //.usage('encrypt|decrypt <password> <options>');
  
   program
   .command('encrypt <password>')
   .description('Encrypt a plain text password')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function (password, options) {
    console.log('Extra Help Text');
 
   });

   program
   .command('NFC Quarterbacks <password>')
   .description('List all the NFC Starting Quarterbacks')

//   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function (NFC, options) {
    console.log('')
    console.log(colors.green('Extra Help Text'));
    console.log('')

    console.log(
      table([
        ['Name', 'Team', 'Jersey Number'],
        ['Aaron Rodgers', 'Packers', '12'],
        ['Tom Brady', 'Bucs', '12'],
        ['Russell Wilson', 'Seahawks', '3']

      ])
    )
 
   });

program.on('--help', function(){
    console.log();
    console.log('Extra Help Text');
    console.log('');
    console.log('');
    console.log('');
  });


// program.on('--help', function(){
//     console.log();
//     console.log('Examples:');
//     console.log('');
//     console.log('  $ pass encrypt mypassword -k oneWordPass');
//     console.log("  $ pass encrypt 'mypassword' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('  $ pass decrypt encryptedstring -k oneWordPass');
//     console.log("  $ pass decrypt 'encryptedstring' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('Notice: ')
//     console.log('  For special characters in passwords/keys,');
//     console.log('  please use single quotes around each');
//     console.log('');
//     console.log('');
//   });


  program.parse(process.argv);

  if (!program.args.length) program.help();
