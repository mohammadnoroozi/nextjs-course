import Image from "next/image";
import classes from "./hero.module.css";


const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/avatar.png"
                    alt="Profile"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Mohammad</h1>
            <p>
                I blog about web dewelopment - especially frontend frameworks like Angular or React.
            </p>
        </section>
    )
}

export default Hero;