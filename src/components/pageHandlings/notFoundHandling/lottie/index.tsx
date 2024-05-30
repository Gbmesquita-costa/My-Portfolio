import Lottie from "react-lottie";
import LottieAnimation404 from "@/assets/lottie/404.json";

export const Animation = (): JSX.Element => {
    return (
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
    )
}