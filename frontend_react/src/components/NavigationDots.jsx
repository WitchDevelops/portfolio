import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#2F9F7A' } : {}}
                >
                </a>
            ))}
        </div>
    )
}

export default NavigationDots