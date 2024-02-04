import liff from '@line/liff';


export default function User_Layout({ children }) {
    // useEffect(() => {
    //     require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // }, []);
    liff
        .init({
            liffId: "2003132004-R8W9JPw8", // Use own liffId
        })
        .then(() => {
            liff.login();
            const profile = liff.getProfile();
            console.log(profile);
        })
        .catch((err) => {
            // Error happens during initialization
            console.log(err.code, err.message);
        });
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