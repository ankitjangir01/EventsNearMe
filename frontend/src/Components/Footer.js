import React from 'react';

const Footer = () => {
    return (
        <section className="">
            <footer className="bg-dark text-white text-center text-md-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Events Near Me</h5>
                            <p>
                                Get quick details about the events going to be organized in your locality. Whether it is religious,
                                 sports, entertainment or seminar, we are commited to keep you updated with them. Find the event which
                                  suits you and lost in the joy with it...
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Connect to us</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none"><i className="fa-brands fa-facebook"></i> EventsNearMe</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none"><i className="fa-brands fa-instagram"></i> ENM_Official</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none"><i className="fa-brands fa-twitter"></i> EventsNearMe</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none"><i className="fa-brands fa-youtube"></i> EventsNearMe</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">More Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Support</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Career</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">Business</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{'backgroundColor': 'rgba(0, 0, 0, 0.2)'}}>
                    © 2022 Copyright: EventsNearMe
                </div>
            </footer>
        </section>
    )
}

export default Footer