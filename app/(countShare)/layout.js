import Count from "./poster/Count";

export default function PostLayout({children}) {


    return (
        <div>
            <section>
                <Count/>
            </section>
            {children}
        </div>
    )
}