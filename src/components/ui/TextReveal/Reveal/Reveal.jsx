import './Reveal.css'
import ScrollTrigger from 'react-scroll-trigger';
import { useState} from 'react'

export default function Reveal({children, className}){

    const [isInview, setIsInView] = useState(false)

    return(
        <ScrollTrigger onEnter={() => setIsInView(true)}>
        {isInview && (
            <div className={className}>
                {children}
            </div>
        )}
        </ScrollTrigger>
    )
}