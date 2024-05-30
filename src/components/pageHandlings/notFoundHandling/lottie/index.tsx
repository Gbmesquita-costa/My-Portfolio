import {
    useEffect,
    useRef,
    useState
} from 'react';

import Lottie from "react-lottie";
import LottieAnimation404 from "@/assets/lottie/404.json";

export const Animation = (): JSX.Element => {
    const animationContainer = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            }, { threshold: 0.1 }
        )

        if (animationContainer.current) {
            observer.observe(animationContainer.current)
        }

        return () => {
            if (animationContainer.current) {
                observer.unobserve(animationContainer.current)
            }
        }
    }, [])

    return (
        <div ref={animationContainer} style={{ minHeight: '400px' }}>
            {isVisible && (
                <Lottie
                    style={{ cursor: "auto" }}
                    isClickToPauseDisabled={true}
                    options={{
                        autoplay: true,
                        loop: true,
                        animationData: LottieAnimation404,
                        rendererSettings: {
                            progressiveLoad: true
                        }
                    }}
                />
            )}
        </div>
    )
}