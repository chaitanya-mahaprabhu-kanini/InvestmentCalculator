import styles from './TryCssModules.module.css';
const TryCssModules = (props) => {
    return(
        <>
            <div className = {styles.encompass}>
            <button className = {styles['btn-test']}>Hello 👋</button>
            <p className = {styles.para}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut labore voluptas possimus deserunt tenetur nihil nesciunt dolores laboriosam, asperiores obcaecati sit ipsum natus officia repellat! Ex molestias nesciunt at atque.</p>
            </div>
        </>
    );
}

export {TryCssModules};