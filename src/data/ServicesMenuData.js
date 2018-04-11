import React from 'react';
import { Player, BigPlayButton } from 'video-react';

const ServicesMenu = {
    /* Top Menu */
    data : [
        {
            'label' : 'Testing',
            'background-image' : '',
            'pathname' : 'testing'
        },
        {
            'label' : 'Proving Grounds',
            'background-image' : '',
            'pathname' : 'proving-grounds'
        },
        {
            'label' : 'engineering solutions',
            'background-image' : '',
            'pathname' : 'engineering-solutions'
        },
        {
            'label' : 'Asset Management',
            'background-image' : '',
            'pathname' : 'Asset-Management'
        }
    ],
    /* Title and Descriptions for main section */
    headerContent : [
        {
            testing : {
                title : 'Testing',
                body : 'Whether you are testing for structural integrity, striving to meet new certification standards, or assessing performance capabilities, you need data that is accurate, comprehensive, and intuitive - data that LINK can provide.'
            },
            proving_grounds : {
                title : 'Proving Grounds',
                body : 'Link Engineering Company has access to proving grounds throughout the United States and around the world, providing full turnkey testing support. LINK’s professional and confidential test track environments will push your product development needs forward and give you the support you need.'
            },
            engineering_solutions : {
                title : 'Engineering Solutions',
                body : 'LINK’s engineering expertise encompasses mechanical, electrical, software, and controls engineering. Our own in-house engineering teams empower us to adapt current designs or design new solutions to meet specific and unique customer requirements. LINK also has engineering experts in application areas such as NVH, hydraulics, environmental climates, dynamic actuation, rotational systems, and more.'
            },
            asset_management : {
                title : 'Asset Management & Scalable Staffing',
                body : 'LINK provides onsite and offsite operation staff for customer’s testing systems operation and management including spare capacity brokerage. We provide service and support for our test systems and equipment so that you can be sure of the quality of your test results. We will insure that machine downtime is reduced or eliminated and service cost is minimized.'
            }           
        }   
    ],
    /* Sub Menus */
    testingMenu : [
        {
            'label' : 'NVH',
            'background-image' : '',
            'pathname' : '/nvh'            
        },
        {
            'label' : 'Vehicle Dynamics',
            'background-image' : '',
            'pathname' : '/vehicle-dynamics'            
        },
        {
            'label' : 'Perfomance',
            'background-image' : '',
            'pathname' : '/performance'            
        },
        {
            'label' : 'Durability',
            'background-image' : '',
            'pathname' : '/durability'            
        },
        {
            'label' : 'Structural Fatigue',
            'background-image' : '',
            'pathname' : '/structural-fatigue'            
        },
        {
            'label' : 'Chemical',
            'background-image' : '',
            'pathname' : '/chemical'            
        },
        {
            'label' : 'Certification / Type Approval',
            'background-image' : '',
            'pathname' : '/certification'            
        },
        {
            'label' : 'Measurement',
            'background-image' : '',
            'pathname' : '/measurement'            
        },
        {
            'label' : 'Custom Testing',
            'background-image' : '',
            'pathname' : '/custom_testing'            
        }
    ], 
    provingGrounds : [
        {
            'label' : 'Off Road',
            'background-image' : '',
            'pathname' : '/offRoad'            
        },
        {
            'label' : 'On Road',
            'background-image' : '',
            'pathname' : '/onRoad'            
        },
    ],
    engineeringSolutions : [
        {
            'label' : 'Test Processes',
            'background-image' : '',
            'pathname' : '/testProcesses'            
        },
        {
            'label' : 'Vehicle To Dyno',
            'background-image' : '',
            'pathname' : '/vehicleToDyno'            
        },
        {
            'label' : 'Training',
            'background-image' : '',
            'pathname' : '/training'            
        },
        {
            'label' : 'Certification / Registations',
            'background-image' : '',
            'pathname' : '/certifications_registrations'            
        }
    ],
    assetManagement : [
        {
            'label' : 'Operations at Link',
            'background-image' : '',
            'pathname' : '/operationsAtLink'            
        },
        {
            'label' : 'Scalable Staffing',
            'background-image' : '',
            'pathname' : '/scalableStaffing'            
        },
    ],
    /* Page Data */
    pageData : [
        {
            /* Testing */
            nvh : {
                title : <h2>NVH</h2>,
                body :
                <div>
                    <p>Issues related to noise, vibration, and harshness (NVH) is still one of the most frequent reasons for customers switching to a competitor. Determining if a product is quiet during winter driving conditions, at high temperatures during a mountain descent, or driving down a parking structure ramp at a constant speed, is a matter of using reliable, well-engineered testing systems and testing services.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/nvh/photo-bank/maul-theet-shim-test-stand.jpg",
                        media: <img src="/images/services/testing/nvh/photo-bank/maul-theet-shim-test-stand.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/nvh/photo-bank/model-3900-nvh-dyno.jpg",
                        media: <img src="/images/services/testing/nvh/photo-bank/model-3900-nvh-dyno.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/nvh/photo-bank/model-4900-chassis-dyno.jpg",
                        media: <img src="/images/services/testing/nvh/photo-bank/model-4900-chassis-dyno.jpg"/>,
                    }
                ]
            },
            vehicleDynamics : {
                title : <h2>Vehicle Dynamics</h2>,
                body :
                <div>
                    <p>When a vehicle is on the road or a test track, performing standard or tailor-made test, all systems interact with each other in ways only a comprehensive and robust measurement system can test. LINK’s array of precision data acquisition systems, along with our access to proving grounds and experienced drivers, help you answer the critical questions that your customer, engineering team, or certification entity will ask.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/vehicle-dynamics/photo-bank/fmvss.jpg",
                        media: <img src="/images/services/testing/vehicle-dynamics/photo-bank/fmvss.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/vehicle-dynamics/photo-bank/instrumented-motorcycle.jpg",
                        media: <img src="/images/services/testing/vehicle-dynamics/photo-bank/instrumented-motorcycle.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/vehicle-dynamics/photo-bank/model-4000-v-max.jpg",
                        media: <img src="/images/services/testing/vehicle-dynamics/photo-bank/model-4000-v-max.jpg"/>,
                    }
                ]
            },
            perfomance : {
                title : <h2>Perfomance</h2>,
                body :
                <div>
                    <p>Performance testing and evaluation is one of the core activities of any automotive development program, ranging from quality control of raw materials, to compliance testing as part of the entire vehicle. LINK’s expertise and capability of providing testing systems and testing services have been the backbone of our success in the testing industry.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/performance/photo-bank/model-2636-caliper-test-stand.jpg",
                        media: <img src="/images/services/testing/performance/photo-bank/model-2636-caliper-test-stand.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/performance/photo-bank/model-3000-performance-dyno.jpg",
                        media: <img src="/images/services/testing/performance/photo-bank/model-3000-performance-dyno.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/performance/photo-bank/model-3945-road-load-simulator.jpg",
                        media: <img src="/images/services/testing/performance/photo-bank/model-3945-road-load-simulator.jpg"/>,
                    }
                ]
            },
            durability : {
                title : <h2>Durability</h2>,
                body :
                <div>
                    <p>LINK systems test wear rates, life expectancy evaluations, changes in behavior and performance as a function of driven distance, and sensitivity to environmental effects to help support your reliability and durability evaluation.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/durability/photo-bank/model-3546-bearing-test-machine.jpg",
                        media: <img src="/images/services/testing/durability/photo-bank/model-3546-bearing-test-machine.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/durability/photo-bank/model-3928-bearing-endurance-machine.jpg",
                        media: <img src="/images/services/testing/durability/photo-bank/model-3928-bearing-endurance-machine.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/durability/photo-bank/structural-load-frame.png",
                        media: <img src="/images/services/testing/durability/photo-bank/structural-load-frame.png"/>,
                    }
                ]
            },
            structural_fatigue : {
                title : <h2>Structural / Fatigue</h2>,
                body :
                <div>
                    <p>Structural and fatigue behavior of components are critical safety issues which can cause severe or irreparable damages. Our experience and engineering capabilities enable you and your product to demonstrate compliance, validate product designs, compare to your competitor, and give the assurance to your customers.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/structural-fatigue/photo-bank/exciter-3D-earthquake-simulator.png",
                        media: <img src="/images/services/testing/structural-fatigue/photo-bank/exciter-3D-earthquake-simulator.png"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/structural-fatigue/photo-bank/lca-actuator.png",
                        media: <img src="/images/services/testing/structural-fatigue/photo-bank/lca-actuator.png"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/structural-fatigue/photo-bank/model-1230-wheel-impact-tester.png",
                        media: <img src="/images/services/testing/structural-fatigue/photo-bank/model-1230-wheel-impact-tester.png"/>,
                    }
                ]
            },
            chemical : {
                title : <h2>Chemical</h2>,
                body :
                <div>
                    <p>When faced with the challenge to comply with new rules on copper and heavy metals in the state of Washington and California, friction material suppliers chose LINK to conduct their chemical evaluations. LINK can also determine the effects of corrosion build up on components over time using our dedicated environmental chambers to control temperature and humidity. We will work with your R&amp;D department to answer chemical-related product questions accurately, reliably, technically, and timely.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/chemical/photo-bank/friction-material-testing.jpg",
                        media: <img src="/images/services/testing/chemical/photo-bank/friction-material-testing.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/chemical/photo-bank/friction-material-testing-2.jpg",
                        media: <img src="/images/services/testing/chemical/photo-bank/friction-material-testing-2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/chemical/photo-bank/friction-material-testing-3.jpg",
                        media: <img src="/images/services/testing/chemical/photo-bank/friction-material-testing-3.jpg"/>,
                    }
                ]
            },
            certification : {
                title : <h2>Certification / Type Approval</h2>,
                body :
                <div>
                    <p>If your needs are related to meeting FMVSS regulations for drive-by noise, electronic stability control, tire performance, timing requirements for air supply systems on tractor/trailer combinations, or comply with the reduced stopping distance for commercial vehicles, LINK is your testing service provider of choice.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/cerification-type-approval/photo-bank/FMVSS110-tire-blow-out.jpg",
                        media: <img src="/images/services/testing/cerification-type-approval/photo-bank/FMVSS110-tire-blow-out.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/cerification-type-approval/photo-bank/FMVSS126-testing.jpg",
                        media: <img src="/images/services/testing/cerification-type-approval/photo-bank/FMVSS126-testing.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/cerification-type-approval/photo-bank/FMVSS126-testing-2.jpg",
                        media: <img src="/images/services/testing/cerification-type-approval/photo-bank/FMVSS126-testing-2.jpg"/>,
                    }
                ]
            },
            measurement : {
                title : <h2>Measurement (Metrology)</h2>,
                body :
                <div>
                    <p>Wherever your testing needs will take you, LINK can get you there. We help your team devise a test plan, get logistics in place, and execute the testing. We will report the test results in the format of your choosing, so that you can easily review the data and make data-driven decisions that will improve your product and business.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/measurement/photo-bank/brake-testing.jpg",
                        media: <img src="/images/services/testing/measurement/photo-bank/brake-testing.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/measurement/photo-bank/execute-testing.jpg",
                        media: <img src="/images/services/testing/measurement/photo-bank/execute-testing.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/measurement/photo-bank/instrument-vehicles.jpg",
                        media: <img src="/images/services/testing/measurement/photo-bank/instrument-vehicles.jpg"/>,
                    }
                ]
            },
            customTesting : {
                title : <h2>Custom Testing</h2>,
                body :
                <div>
                    <p>Whatever your testing needs are, LINK has you covered. Our specialty is developing innovative custom solutions, and we will work with our customers to provide testing services that will exceed their expectations.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/testing/custom-testing/photo-bank/bi-axial-vibration-test-stand.jpg",
                        media: <img src="/images/services/testing/custom-testing/photo-bank/bi-axial-vibration-test-stand.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/custom-testing/photo-bank/seat-vibration-tester.png",
                        media: <img src="/images/services/testing/custom-testing/photo-bank/seat-vibration-tester.png"/>,
                    },
                    {
                        backgroundImage: "/images/services/testing/custom-testing/photo-bank/table-top-load-frame.jpg",
                        media: <img src="/images/services/testing/custom-testing/photo-bank/table-top-load-frame.jpg"/>,
                    }
                ]
            },
            /* Proving Grounds */
            offRoad : {
                title : <h2>Off-Road</h2>,
                body :
                <div>
                    <p>Push your vehicle to the limits on a wide spectrum of testing conditions. From hot, dusty deserts, to swamps, mud pits and rough country, LINK can test for any type of climate or elevation. We accommodate a wide variety of vehicle types including passenger cars, light trucks and SUVs, trailers, motorcycles and other specialty vehicles.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/proving-ground/off-road/photo-bank/atv-testing.jpg",
                        media: <img src="/images/services/proving-ground/off-road/photo-bank/atv-testing.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/proving-ground/off-road/photo-bank/off-road.jpg",
                        media: <img src="/images/services/proving-ground/off-road/photo-bank/off-road.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/proving-ground/off-road/photo-bank/specialty-vehicle-testing.jpg",
                        media: <img src="/images/services/proving-ground/off-road/photo-bank/specialty-vehicle-testing.jpg"/>,
                    }
                ]
            },
            onRoad : {
                title : <h2>On-Road</h2>,
                body :
                <div>
                    <p>From cruising at high speeds on an oval track, to performing brake tests on a grade hill, LINK has access to many on-road courses around the world. We can accommodate a wide variety of vehicle types including passenger cars, light trucks and SUVs, trailers, motorcycles and other special uses.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/proving-ground/on-road/photo-bank/vehicle-testing-1.jpg",
                        media: <img src="/images/services/proving-ground/on-road/photo-bank/vehicle-testing-1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/proving-ground/on-road/photo-bank/vehicle-testing-2.jpg",
                        media: <img src="/images/services/proving-ground/on-road/photo-bank/vehicle-testing-2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/proving-ground/on-road/photo-bank/vehicle-testing-3.jpg",
                        media: <img src="/images/services/proving-ground/on-road/photo-bank/vehicle-testing-3.jpg"/>,
                    }
                ]
            },
            /* Enginering Solutions */
            testProcesses : {
                title : <h2>Test Process Development</h2>,
                body :
                <div>
                    <p>LINK is able to help our customers develop robust test protocols and complete processes to evaluate and validate their parts. As a testing service provider, we are exposed to test setup, execution, and reporting of a wide variety of tests on a daily basis. The global footprint of our test laboratories allows us to better understand typical testing principles and strategies used across the world. Our participation and lead in many global industry working groups, including SAE and ISO, allow us to gain a close look and understanding of internationally standardized test procedures.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/engineering-solutions/test-process-development/photo-bank/prolink-execution.jpg",
                        media: <img src="/images/services/engineering-solutions/test-process-development/photo-bank/prolink-execution.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/test-process-development/photo-bank/test-process.jpg",
                        media: <img src="/images/services/engineering-solutions/test-process-development/photo-bank/test-process.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/test-process-development/photo-bank/working-together-with-customers.jpg",
                        media: <img src="/images/services/engineering-solutions/test-process-development/photo-bank/working-together-with-customers.jpg"/>,
                    }
                ]
            },
            vehicleToDyno : {
                title : <h2>Vehicle to Dyno</h2>,
                body :
                <div>
                    <p>V2D (vehicle-to-dyno) refers to the process of collecting data to characterize system conditions in the field, and then reproducing these conditions in the laboratory environment. V2D can be used to develop an accurate representation of a traffic route that follows the full vehicle profile for accurate mileage and brake output on the dynamometer simulation testing.</p>
                    <p>LINK is uniquely positioned to support the V2D process as we provide vehicle data acquisition systems as well as laboratory test equipment that share common software operating platforms and user interfaces. This process saves you time and money while providing the same accurate results.</p>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/engineering-solutions/v2d-correlation/photo-bank/dynamometer-testing.jpg",
                        media: <img src="/images/services/engineering-solutions/v2d-correlation/photo-bank/dynamometer-testing.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/v2d-correlation/photo-bank/vehicle-Instrumentation.jpg",
                        media: <img src="/images/services/engineering-solutions/v2d-correlation/photo-bank/vehicle-Instrumentation.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/v2d-correlation/photo-bank/vehicle-testing-on-track.jpg",
                        media: <img src="/images/services/engineering-solutions/v2d-correlation/photo-bank/vehicle-testing-on-track.jpg"/>,
                    }
                ]
            },
            training : {
                title : <h2>Training</h2>,
                body :
                <div>
                    <p>LINK goes beyond testing and engineering by offering various training opportunities to our customers. These training sessions cover the entire range of the testing process, including:</p>
                    <ul>
                        <li>Fixture design and build</li>
                        <li>Test part pre-test measurement, inspection and preparation</li>
                        <li>Test setup, initial check, teardown, and post-measurement</li>
                        <li>Test execution, inspection, and monitoring</li>
                        <li>Sub-assembly setup, measurement, and data analysis</li>
                        <li>Data review and report processing</li>
                        <li>Maintenance and verification</li>
                        <li>Test procedure comprehension (various procedures available)</li>
                        <li>Test program creation and customization (beginner and advanced)</li>
                        <li>Creating and managing test request system</li>
                        <li>Laboratory utilization monitoring and management</li>
                        <li>Schedule management</li>
                    </ul>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/engineering-solutions/training/photo-bank/calibration-service.jpg",
                        media: <img src="/images/services/engineering-solutions/training/photo-bank/calibration-service.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/training/photo-bank/inspection-and-preparation.jpg",
                        media: <img src="/images/services/engineering-solutions/training/photo-bank/inspection-and-preparation.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/training/photo-bank/preventative-maintenance.jpg",
                        media: <img src="/images/services/engineering-solutions/training/photo-bank/preventative-maintenance.jpg"/>,
                    }
                ]
            },
            certifications_registrations : {
                title : <h2>Certifications - Registrations</h2>,
                body :
                <div>
                    <p>LINK goes beyond testing and engineering by offering various training opportunities to our customers. These training sessions cover the entire range of the testing process, including:</p>
                    <ul>
                        <li>LINK Conformance Assessment</li>
                        <li>OEM-specific test certification</li>
                        <li>ECE R13 and R90</li>
                        <li>SAE J2975 / NSF chemical testing</li>
                        <li>AMECA certification</li>
                        <li>UIC – worldwide railway organization</li>
                    </ul>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/engineering-solutions/certification-registrations/photo-bank/brake-testing-service.jpg",
                        media: <img src="/images/services/engineering-solutions/certification-registrations/photo-bank/brake-testing-service.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/certification-registrations/photo-bank/chemical-testing.jpg",
                        media: <img src="/images/services/engineering-solutions/certification-registrations/photo-bank/chemical-testing.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/engineering-solutions/certification-registrations/photo-bank/machine-maintenance-and-calibration.jpg",
                        media: <img src="/images/services/engineering-solutions/certification-registrations/photo-bank/machine-maintenance-and-calibration.jpg"/>,
                    }
                ]
            },
            /* Asset Management */
            operationsAtLink : {
                title : <h2>Operations at Link</h2>,
                body :
                <div>
                    <p>Many LINK customers have chosen to house their owned equipment at LINK test facilities. Some advantages of this include:</p>
                    <ul>
                        <li>Skilled LINK technicians and engineers with significant test experience</li>
                        <li>Sell machine excess capacity through LINK sales staff</li>
                        <li>Professional test facility with all overhead utilities</li>
                        <li>Machine maintenance and calibration handled by LINK equipment service personnel</li>
                        <li>Access to LINK fixture and test part warehouse</li>
                        <li>Access to LINK library of test programs and report templates</li>
                    </ul>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/asset-management/operations-at-link/photo-bank/dearborn-servo-hydraulics-lab.jpg",
                        media: <img src="/images/services/asset-management/operations-at-link/photo-bank/dearborn-servo-hydraulics-lab.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/asset-management/operations-at-link/photo-bank/machine-maintenance.jpg",
                        media: <img src="/images/services/asset-management/operations-at-link/photo-bank/machine-maintenance.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/asset-management/operations-at-link/photo-bank/professional-test-facility.jpg",
                        media: <img src="/images/services/asset-management/operations-at-link/photo-bank/professional-test-facility.jpg"/>,
                    }
                ]
            },
            scalableStaffing : {
                title : <h2>Scalable Staffing</h2>,
                body :
                <div>
                    <p>Scalable Staffing offers the opportunity for LINK to provide skilled test technicians and engineers onsite at the customer facility to take responsibility for full-time operation and maintenance of testing laboratories. LINK is able to scale up staffing resources based on customer needs. Advantages include:</p>
                    <ul>
                        <li>Skilled LINK technicians and engineers with significant test experience</li>
                        <li>Scale up and down as needed with high flexibility</li>
                        <li>Machine maintenance and calibration handled by LINK equipment service personnel</li>
                        <li>Skilled personnel provided in place with any employee turnover</li>
                    </ul>
                </div>,
                items : [
                    {
                        backgroundImage: "/images/services/asset-management/scalable-staffing/photo-bank/calibration.jpg",
                        media: <img src="/images/services/asset-management/scalable-staffing/photo-bank/calibration.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/asset-management/scalable-staffing/photo-bank/skilled-link-technicians.jpg",
                        media: <img src="/images/services/asset-management/scalable-staffing/photo-bank/skilled-link-technicians.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/services/asset-management/scalable-staffing/photo-bank/skilled-personnel.jpg",
                        media: <img src="/images/services/asset-management/scalable-staffing/photo-bank/skilled-personnel.jpg"/>,
                    }
                ]
            },
        }       
    ]  
}

export default ServicesMenu;