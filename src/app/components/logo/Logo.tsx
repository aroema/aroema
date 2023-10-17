import style from './style.module.css'

export default function Logo({
    className,
}:{
    className?: string,
}){
    let logoClass = style.logo;

    if(className) {
        logoClass += ' ' + className;
    }

    return (
        <div className={logoClass}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.25 255.25" role='img'>
                <text transform="translate(45.96 178.23) scale(1.66 1)" fill='#dddddd' fontFamily='MyriadPro-Regular, Arial, sans-serif' fontSize="157.51px" >
                    <tspan x="0" y="0">A</tspan>
                </text>
                <rect x=".5" y=".5" width="254.25" height="254.25" fill='none' stroke='#dddddd' strokeMiterlimit={10} />
            </svg> 
        </div>
    )
}