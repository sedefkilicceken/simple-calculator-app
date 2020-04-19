import React from 'react';
import Screen from './Screen/Screen'
import KeyPad from './KeyPad/KeyPad'


class Calculator extends React.Component {


    constructor() {
        super();

        //equatioon ve result değişkeleri Screen ekranında işşlem görüceği için props geçilmelidir.
        this.state = {

            equation: '',
            result: 0
        }

    }

    //Butonların işleevsel özelliği için funk yazılmalıdır

    clear() {
        //Clear tuşuna basıldığı zaman sonuç: 0 ve denklem kısmında da hiçbir şey yazmamalıdır.
        this.setState({ equation: '', result: 0 });
    }
    
    onButtonPress = (event) => {
      
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') {

            return this.clear();
        }

       
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
            this.setState({

                equation : this.state.equation + pressedButton
                 
                 })
        }
       
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
            this.setState({

                equation : this.state.equation +' ' +  pressedButton + ' '
                 
                 })
        }
        
        else if (pressedButton === '=') {
            try {
              const evalResult = eval(this.state.equation);
              const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
              this.setState({
                 result : result,
                
                });

            } catch (error) {
              alert('Geçersiz Matematiksel Denklem');
            }
          }

          else {
             
            var str = this.state.equation; 
            str = str.substr(0,str.length-1); 
            this.setState({equation: str});
            
          }
            
    
    }
        
       
    render() {
        return (

            <div className="Calculator">

                <Screen
                    equation={this.state.equation}
                    result={this.state.result} />
                <KeyPad onButtonPress={this.onButtonPress} />

            </div>


        );
    }
}
export default Calculator;