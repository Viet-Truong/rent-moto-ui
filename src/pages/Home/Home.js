import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Slider from "~/components/Slider";
import { slider_data } from "~/data/slide";
import { policy } from "~/data/data";
import { useState } from "react";
import Moto from "~/components/Moto";

const cx = classNames.bind(styles);
function Home() {
    const [cars, setCars] = useState([]);
    const data = {
        name: "Honda winner X",
        price: "130k / 1h",
        image01:
            "https://cdn.honda.com.vn/motorbike-versions/December2021/AjAslqMuYpko2d6wmuEs.png",
        slug: "honda-winner-x",
    };
    // const setFilter = (values) => {
    //     if (values) {
    //         if (values.length > 1) {
    //             // var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
    //             // var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");
    //             setFrom(moment(values[0]).format("MMM DD yyyy HH"));
    //             setTo(moment(values[1]).format("MMM DD yyyy HH"));
    //             var selectedFrom = moment(new Date(values[0]._d)).format(
    //                 "MMM DD yyyy HH:mm"
    //             );
    //             var selectedTo = moment(new Date(values[1]._d)).format(
    //                 "MMM DD yyyy HH:mm"
    //             );
    //         }
    //     }
    // };

    return (
        <div className={cx("home")}>
            <Slider
                data={slider_data}
                timeOut={5000}
                auto={true}
                control={true}
            />
            <div className={cx("wrapper-policy")}>
                {policy.map((item) => (
                    <div className={cx("policy__card")} key={item.id}>
                        <div className={cx("policy__icon")}>{item.icon}</div>
                        <div className={cx("policy__info")}>
                            <h4 className={cx("policy__title")}>{item.name}</h4>
                            <p className={cx("policy__description")}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx("main-content")}>
                <h2 className={cx("content__title")}>
                    TẤT CẢ CÁC XE ĐANG ĐƯỢC CHO THUÊ
                </h2>
                <div className={cx("wrapper-car")}>
                    <figure>
                        <Moto
                            img01={data.image01}
                            name={data.name}
                            price={data.price}
                            slug={"hunda"}
                        />
                    </figure>

                    <figure>
                        <Moto
                            img01={data.image01}
                            name={data.name}
                            price={data.price}
                            slug={data.slug}
                        />
                    </figure>

                    <figure>
                        <Moto
                            img01={data.image01}
                            name={data.name}
                            price={data.price}
                            slug={data.slug}
                        />
                    </figure>

                    <figure>
                        <Moto
                            img01={data.image01}
                            name={data.name}
                            price={data.price}
                            slug={"honda"}
                        />
                    </figure>

                    <figure>
                        <Moto
                            img01={data.image01}
                            name={data.name}
                            price={data.price}
                            slug={data.slug}
                        />
                    </figure>

                    <figure>
                        <Moto
                            img01={data.image01}
                            name={data.name}
                            price={data.price}
                            slug={data.slug}
                        />
                    </figure>

                    <figure>
                        <Moto
                            img01={data.image01}
                            name={data.name}
                            price={data.price}
                            slug={data.slug}
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Home;
