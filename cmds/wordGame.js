const qoa = require('qoa');
const {log} = console;
const inquirer = require('inquirer')

module.exports =  {
    play:async (args) => {
    

    console.log("Welcome to word Game , guess the word by looking at definition and synonym !\n")
    var wod = require('./wod')(args)
    wod.then(function(res){
      res._[1] = res._[0];
      var def = require('./def')(res);
      def.then((def)=>{
          console.log("Definition : ", def[0].text)
          var syn = require('./syn')(res);
          syn.then((syn)=>{
            console.log("Synonym : ", syn[0])
            var questions = [{
                type: 'input',
                name: 'word',
                message: "guess the word: ",
              }]
            inquirer.prompt(questions).then(answers => {
                if(answers['word'] === res._[0]){
                    console.log("correct word :) !")
                }else{                    
                 module.exports.choice(questions, res);
            }
          });
      });
    });
});
},
choice: function(questions, res){
    console.log("Wrong answer ! \n Choose among these options: \n 1.try again \n 2.hint \n 3.quit !")
        var option = [{
            type: 'input',
            name: 'choice',
            message: "enter choice number: ",
            }]
            inquirer.prompt(option).then(choice => {
            if(choice.choice == 1){
                inquirer.prompt(questions).then(answers => {
                    if(answers['word'] === res._[0]){
                        console.log("correct word :) !");
                    }else{module.exports.choice(questions, res);}
                });
            }else if(choice.choice == 2){
                console.log('Hint(jumbled word) : ')
                var shuffled = res._[0].split('').sort(function(){return 0.5-Math.random()}).join('');
                console.log(shuffled)
                inquirer.prompt(questions).then(answers => {
                    if(answers['word'] === res._[0]){
                        console.log("correct word :) !");
                    }else{module.exports.choice(questions, res);}
                });
            }else if(choice.choice == 3){
                console.log("word is : ", res._[0]);
                res._[1] = res._[0];
                require('./fullDict')(res);
                return ;
            }
        });
    }
}
