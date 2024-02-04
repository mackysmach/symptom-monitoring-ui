export default function User_Layout({ children }) {
    // useEffect(() => {
    //     require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // }, []);
    return (
        <>
            <div className="pt-5">
                <div className='mb-4 '>

                    <section>{children}</section>
                </div>

            </div>
        </>
    );
}