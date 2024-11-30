import Main from "./Main.jsx"

export default function Page(props){
    return(
        <div>
            <Main sport={props.sport} />
        </div>
    );
}


//If want to add sidebar in the future follow this link
// https://stackoverflow.com/questions/65022705/how-to-layout-the-react-components