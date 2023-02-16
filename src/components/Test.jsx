import React, {useState} from 'react';
import axios from "axios";
import {WithAuthRedirect} from "../hocs/WithAuthRedirect";

let Test = (props) => {
    const [data, setData] = useState("click to get a name");
    window.data = data;

    function testGet() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => setData(response.data.items[1].name))
    }

    return (
        <div style={{ backgroundColor: 'lightgreen' }}>
            {props.name}
            <div>
                {data}
            </div>
            <button style={{width: 50, height: 20}} onClick={() => testGet()}></button>
        </div>
    )
}

// class Test extends React.Component {
//     name;
//     data;
//     constructor(props) {
//         super(props);
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => this.name = this.props.name);
//     }
//     testAlert() {
//         alert(this.name);
//     }
//     render() {
//         return (
//             <div style={{ backgroundColor: 'lightgreen' }}>
//                 {this.name}
//                 <div>
//                     {this.data}
//                 </div>
//                 <button style={{width: 50, height: 20}} onClick={() => this.testAlert()}></button>
//             </div>
//         )
//     }
// }

Test = WithAuthRedirect(Test);
export default Test;