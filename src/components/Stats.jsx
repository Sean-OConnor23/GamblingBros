import * as getSports from "../apis/the_odds" 


export default function Stats(){
    var data = JSON.stringify(getSports.default);
    console.log(data)
    return (
        <div>
            <p>{data}</p>
        </div>
    );
}