#!/usr/bin/env node
'use script'

const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');
const table = require('markdown-table')

program
  .version('0.1.0', '-v, --version')
  .usage(' ');
  //.usage('encrypt|decrypt <password> <options>');
  
   program
   .command('teams')
   .description('List Teams in the NFC along with the names of Coaches, Mascots, and Head Coaches')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function (password, options) {
    console.log('Extra Help Text');
    console.log('')
    console.log('')
    console.log(colors.green('teams on the nfc conference'));
    console.log('')

    console.log(

      table([
        ['Team Name', 'Mascot', 'Head Coach', 'website'],
        ['Green Bay Packers', 'N/a', 'Matt LaFleur', 'https://www.packers.com/'],
        ['Tampa Bay Buccaneers', 'Captian Fear', 'Bruce Arians', 'https://www.buccaneers.com/'],
        ['Seattle Seahawks', 'Blitz/Boom/Taima', 'Pete Caroll', 'https://wwww.seahawks.com/'],
        ['New Orleans Saints', 'Siants', 'Sean Payton', 'http://wwww.neworleanssiants.com/'],
        ['Washington Football Team', 'N/a', 'Ron Rivera', 'https://www.washingtonfootball.com/'],
        ['Carolina Panther', 'Sir Purr', 'Matt Rhule', 'https://www.panthers.com/'],
        ['Atlanta Falcons', 'Freddie Falcon', 'Dann Quinn', 'https://www.atlantafalcons.com/'],
        ['Arizona Cardinals', 'Big Red', 'Kliff Kingsbury', 'https://www.azcardinals.com/'],
        ['Los Angeles Rams', 'Rams', 'Sean McVay', 'https://www.therams.com/'],
        ['San Franciso 49ers', 'Sourdough Sam', 'Kyle Shanahan', 'https://www.49ers.com/'],
        ['Dallas Cowboys', 'Rowdy', 'Mike McCarthy', 'https://www.dallascowboys.com/'],
        ['New York Giants', 'N/a', 'Joe Judge', 'https://www.giants.com/'],
        ['Philadelphia Eagles', ' Swoop', 'Doug Pederson', 'https://www.philadelphiaeagles.com/'],
        ['Chicago Bears', 'Stayley Da Bear', 'Matt Nagy', 'https://www.chicagobears.com/'],
        ['Detroit Lions', 'Lions', 'Matt Patricia', 'https://www.detroitlions.com/'],
        ['Minnesota Vikings', 'Viktor', 'Mike Zimmer', 'https://www.vikings.com/']
        
      ])
    )
   });

   program
   .command('qbs')
   .description('List all the NFC Starting Quarterbacks')

//   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function (NFC, options) {
    console.log('')
    console.log(colors.green('The Future Hall of Famers'));
    console.log('')

    console.log(

      table([
        ['Name', 'Team', 'Jersey Number'],
        ['Aaron Rodgers', 'Packers', '12'],
        ['Tom Brady', 'Bucs', '12'],
        ['Russell Wilson', 'Seahawks', '3'],
        ['Drew Brees', 'Saints', '9'],
        ['Alex Smith', 'Washington Football Team', '11'],
        ['Teddy Bridgewater', 'Panthers', '5'],
        ['Matt Ryan', 'Falcons', '2'],
        ['Kyler Murray', 'Cardinals', '1'],
        ['Jared Goff', 'Rams', '16'],
        ['Jimmy Garoppolo', '49ers', '10'],
        ['Dak Prescott', 'Cowboys', '4'],
        ['Daniel Jones', 'Giants', '10'],
        ['Jalen Hurts', 'Eagles', '2'],
        ['Mitchell Trubisky', 'Bears', '10'],
        ['Matthew Stafford', 'Lions', '9'],
        ['Kirk Cousins', 'Vikings', '8']

      ])
    )
      console.log('')
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
