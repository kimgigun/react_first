const React = require('react');
const {Component} = React;

class WordRelay extends Component{
    state = {
        word:"된다",
        value:'',
        result:'?'
    };

    onChange = (e)=>{
        this.setState(
           {value:e.target.value}
        );
    }

    onSubmit = (e) =>{
        e.preventDefault();
        
        let lastString = this.state.word.substr(this.state.word.length - 1);
        let firtString = this.state.value.substring(0,1);
        console.log(lastString);
        console.log(firtString);
        if(lastString === firtString){
            this.setState((prevValue)=>{
                return {result:'딩동댕',
                        value:'',
                        word:prevValue.value}
            });
        }else{
            this.setState(
                {
                    result:'땡',
                    value:''});
        }
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <h1>{this.state.word}</h1>
                <div>
                    <input type="text" onChange={this.onChange} value={this.state.value}/>
                </div>
                <button>결과</button>
                <p>{this.state.result}</p>
            </form>
        );
        
    }
}

module.exports = WordRelay;