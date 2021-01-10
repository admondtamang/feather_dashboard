import React from "react";

export default function Tab2_Detail({ time, date, title, onClick, show }) {
    if (!show) {
        return null;
    }
    return (
        <article>
            <header>
                <div className="header__left">
                    <box-icon name="arrow-back" onClick={onClick}></box-icon>
                    <p>
                        <b>Notes /</b>
                        <span> The function of the logo</span>
                    </p>
                </div>
                <box-icon name="trash" type="solid" color="red"></box-icon>
            </header>
            <div className="content__header">
                <div className="content__left">
                    <div className="avatar"></div>
                    <p>
                        <b>{title}</b>
                        <br />
                        <span>
                            {time}
                            {date}
                        </span>
                    </p>
                </div>
                <div className="content__right">
                    <box-icon name="bold"></box-icon>
                    <box-icon name="italic"></box-icon>
                    <box-icon name="align-right"></box-icon>
                </div>
            </div>
            <p className="paragraph">
                They are big, bold and beautiful. Billboards have been around
                for quite a while. In almost all places nowadays you can find
                billboards of just about every product there is in the market.
                No matter how you see it, billboard advertising is on the rise.
                Compared to other forms of advertising, billboards are a more
                affordable way of getting your message across to the public. If
                newspaper advertising lasts only for a day and a television
                advertisement last for only about forty seconds, billboard
                adverting last 24/7. Billboards can connect easily with
                potential markets because more people are mobile nowadays –
                referring to the increasing number of commuters and more time
                spent outside of the house. Advances in technology have also
                made billboards more cost effective. Advances in digital
                printing have also allowed billboards to be printed cheaply and
                quickly on canvas. Lately, billboards have been getting
                pocket-friendly as well. But before you get your creative juices
                flowing and before you plunge into the exciting world of
                billboard advertising there things you need to understand.
                First, don’t expect the billboard to contain a lot of
                information. This is not just possible. The number one rule in
                billboard advertising is simplicity. This rule simply means that
                you need to use only a few words to get your message across. But
                this doesn’t mean that you can no longer make complex,
                intelligent and intriguing statements. You still can but in the
                simplest way you can. Say three balls are thrown to you at the
                same time. Chances are you will not catch all these balls let
                alone catch one. Throwing three balls at the same time is like
                throwing several ideas and message to your audience at the same
                time. If you throw one idea at a time chances are most of your
                readers will grasp it and walk away with the message. But if you
                throw two ideas at the same time only few will be able to get
                your message. So pay attention to the golden rule and keep your
                billboard simple. The price for disregarding the rule is wastage
                of thousands of dollars but the reward can lead to huge fame and
                fortune.
            </p>
        </article>
    );
}
