import React from 'react';
import { Player, BigPlayButton } from 'video-react';

const BrakesSubMenuData = {
    /* Top Menu */
    data: [
        // Dynamometer
        [
            {
                'label' : 'M-1200 Dyno',
                'background-image' : '',
                'pathname' : 'm1200Dyno'
            },
            {
                'label' : 'M-1400 Dyno',
                'background-image' : '',
                'pathname' : 'm1400Dyno'
            },
            {
                'label' : 'M-2000 Friction Standards Dyno',
                'background-image' : '',
                'pathname' : 'm2000FrictionStandardDyno'
            },
            {
                'label' : 'M-2900 Dyno',
                'background-image' : '',
                'pathname' : 'm2900Dyno'
            },
            {
                'label' : 'M-3000 Dyno',
                'background-image' : '',
                'pathname' : 'm3000Dyno'
            },
            {
                'label' : 'M-3640 High Speed Rail Dyno',
                'background-image' : '',
                'pathname' : 'm3640HighSpeedRailDyno'
            },
            {
                'label' : 'M-3900 NVH Dyno',
                'background-image' : '',
                'pathname' : 'm3900NVHDyno'
            },
            {
                'label' : 'M-3900 SR Dyno',
                'background-image' : '',
                'pathname' : 'm3900SRDyno'
            },
            {
                'label' : 'M-4900 Chassis Dyno',
                'background-image' : '',
                'pathname' : 'm4900ChassisDyno'
            },
            {
                'label' : 'M-6900 Heavy Truck Dyno',
                'background-image' : '',
                'pathname' : 'm6900HeavyTruckDyno'
            },
            {
                'label' : 'M-8700 Aircraft Roll  Dyno',
                'background-image' : '',
                'pathname' : 'm8700AircraftRollDyno'
            },
            {
                'label' : 'M-8900 Aircraft Brake  Dyno',
                'background-image' : '',
                'pathname' : 'm8900AircraftBrakeDyno'
            },
        ],
        // Test Stands
        [
            {
                'label' : 'Model 200/600 Chase Friction Material',
                'background-image' : '',
                'pathname' : 'm200_600chaseFrictionMaterial'
            },
            {
                'label' : 'Model 1450 Low Pressure Rotor Wear',
                'background-image' : '',
                'pathname' : 'm1450LowPressureRotorWear'
            },
            {
                'label' : 'Model 1620 Compressibility Machine',
                'background-image' : '',
                'pathname' : 'model1620CompressibilityMachine'
            },
            {
                'label' : 'Hydraulic Model 1620-H',
                'background-image' : '',
                'pathname' : 'hydraulicModel1620h'
            },
            {
                'label' : 'Model 2490 Torque Flex Durability',
                'background-image' : '',
                'pathname' : 'model2490TorqueFlexDurability'
            },
            {
                'label' : 'Model 2636 Brake Functionality Test',
                'background-image' : '',
                'pathname' : 'model2636BrakeFunctionalityTest'
            },
            {
                'label' : 'Model 3016 Residual Drag & RTV',
                'background-image' : '',
                'pathname' : 'model3016ResidualDrag_RTV'
            },
            {
                'label' : 'Model 2876 Shear Test Machine',
                'background-image' : '',
                'pathname' : 'model2876ShearTestMachine'
            },
            {
                'label' : 'Model 3070 Vehicle DTV & Drag Tester',
                'background-image' : '',
                'pathname' : 'model3070VehicleDTV_DragTester'
            },
            {
                'label' : 'Model 3315 Rotor Mapping Station',
                'background-image' : '',
                'pathname' : 'model3315RotorMappingStation'
            },
            {
                'label' : 'Model 3378 Portable Vehicle DTV & Drag',
                'background-image' : '',
                'pathname' : 'model3378PortableVehicleDTV_Drag'
            },
            {
                'label' : 'Model 3394 NVH Master Cylinder Test',
                'background-image' : '',
                'pathname' : 'model3394NVHMasterCylinderTest'
            },
            {
                'label' : 'Lining Wear Mapping Station',
                'background-image' : '',
                'pathname' : 'liningWearMappingStation'
            },
            {
                'label' : 'Shapix 1500',
                'background-image' : '',
                'pathname' : 'shapix1500'
            },
            {
                'label' : 'ABS Expert Heavy-Duty Brake',
                'background-image' : '',
                'pathname' : 'ABSExpertHeavyDutyBrake'
            },
            {
                'label' : 'Air System Expert',
                'background-image' : '',
                'pathname' : 'airSystemExpert'
            },
            {
                'label' : 'Brake Shim Damping Test Stand',
                'background-image' : '',
                'pathname' : 'brakeShimDampingTestStand'
            },
            {
                'label' : 'BM 14200 Roller Brake Tester',
                'background-image' : '',
                'pathname' : 'bm14200RollerBrakeTester'
            },
            {
                'label' : 'Model 20200 Roller Brake Tester',
                'background-image' : '',
                'pathname' : 'model20200RollerBrakeTester'
            },
            {
                'label' : 'BM 3010 Mobile Brake Tester',
                'background-image' : '',
                'pathname' : 'BM3010MobileBrakeTester'
            },
            {
                'label' : 'Model 100 Fast Machine',
                'background-image' : '',
                'pathname' : 'model100FastMachine'
            },
            {
                'label' : 'Model 2552 Booster Test Stand',
                'background-image' : '',
                'pathname' : 'model2552BoosterTestStand'
            }
        ],
        // Sub Systems
        [
            {
                'label' : 'Model 3945 Road Load Simulation',
                'background-image' : '',
                'pathname' : 'model3945RoadLoadSimulation'
            },
            {
                'label' : 'Model 2864 Passive Road Wheel',
                'background-image' : '',
                'pathname' : 'model2864PassiveRoadWheel'
            },
            {
                'label' : 'Model 5002 Residual Drag Tailstock',
                'background-image' : '',
                'pathname' : 'model5002ResidualDragTailstock'
            }, 
        ]     
    ],
    brakesMenus : [
        {
            'label' : 'Dynamometer',
            'background-image' : '',
            'pathname' : 'dynamometer'            
        },
        {
            'label' : 'Test Stands',
            'background-image' : '',
            'pathname' : 'test-stands'            
        },
        {
            'label' : 'Sub Systems',
            'background-image' : '',
            'pathname' : 'sub-systems'            
        },
    ], 
    pageData: [
        {
            /* Dynamometer */
            m1200Dyno: {
                title : <h2>Automotive Sub-Scale Dynamometer - Model 1200</h2>,
                body :
                <div>
                    <p>The Model 1200 Sub-Scale Automotive Dynamometer provides an economical alternative to full scale dynamometer testing.  This machine is configured to replicate full scale brake assemblies by utilizing approximately one-fifth scale samples of a variety of friction materials to analyze actual vehicle braking conditions. The universal caliper and rotor provide a convenient way to evaluate friction materials without actual vehicle components.</p>
                    <br />
                    <h3>APPLICATIONS:</h3>
                    <ul>
                        <li>Frictional Material Development</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Control System: ProLINK&trade; Software</li>
                        <li>Torque Capacity: 600 Nm</li>
                        <li>Test Rotor: 235 mm diameter</li>
                        <li>Fixture type: Universal caliper</li>
                        <li>Brake Enclosure: Insulated, double-walled, stainless steel</li>
                        <li>Main Drive: AC Motor 40KW</li>
                        <li>Speed: 1500/2500 rpm</li>
                        <li>Mechanical Inertia System: One fixed disc (8 to 18 kgm<sup>2</sup>)</li>
                        <li>Temperature Measurement: 2 rotating channels (slip ring), 4 stationary</li>
                    </ul>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m1400Dyno: {
                title : <h2>Model 1400 Aircraft Sub-Scale Dynamometer</h2>,
                body :
                <div>
                    <p>The Model 1400 Sub-Scale Aircraft Dynamometer provides an economical alternative to full scale dynamometer testing.  This dynamometer replicates the kinetic energy per unit, and other parameters, such as temperature, at the friction interface.  It is used extensively in simulating the performance of carbon-carbon brakes. The Model 1400 is designed to replicate and analyze actual aircraft operating conditions at the friction interface.  The precisely controlled linear loading system closely controls the unit pressure between test samples.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Friction Material Development of aircraft carbon-carbon brakes</li>
                    </ul>
                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Standard Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Control System: ProLINK Software</td></tr>
                                <tr><td>Torque Capacity: 675 NM</td></tr>
                                <tr><td>Brake Enclosure: 14 Gage steel</td></tr>
                                <tr><td>Main Drive: Motor - 30kW &middot; Speed - 3570/7000rpm</td></tr>
                                <tr><td>Mechanical Inertia System:<br /><span>Engagement - Manual</span><br /><span>Minimum Inertia - 0.20 kgm<sup>2</sup></span><br /><span>Maximum Inertia - 2.15 kgm<sup>2</sup></span><br /><span>Inertia Increment - 0.085 kgm<sup>2</sup></span></td></tr>
                            </td>

                            <td>
                                <tr><td>Mechanical Inertia System:<br /><span>Engagement - Manual</span><br /><span>Minimum Inertia - 0.20 kgm<sup>2</sup></span><br /><span>Maximum Inertia - 2.15 kgm<sup>2</sup></span><br /><span>Inertia Increment - 0.085 kgm<sup>2</sup></span></td></tr>
                                <tr><td>Servo Brake Apply System:<br /><span>Maximum Apply Force - 35,000 N</span><br /><span>Maximum Apply Rate - 40,000 N/sec</span></td></tr>
                                <tr><td>Temperature Measurement: 2 rotating channels (slip ring)</td></tr>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>Taxing</li>
                        <li>Landing</li>
                        <li>Rejected take-off</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m200FrictionStandardsDyno: {
                title : <h2>Model 2000 Friction Standard Dynamometer</h2>,
                body :
                <div>
                    <p>The Model 2000 is a full inertia friction standard dynamometer designed specifically to conduct the most commonly run global test procedures for development of hydraulically actuated brake calipers, friction materials, drums and rotors for passenger vehicles and light trucks. Its compact layout efficiently and economically allows evaluation of brake friction development, design and quality control. The Model 2000 incorporates the latest technology, software, controls and proven components, which result in low maintenance. It is an excellent value at an affordable price point, and comes with the added benefit of having a short lead-time for fast delivery, while saving time and cost for installation.</p>

                    <table className="specs-table">
                    <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Performance and wear</td></tr>
                                <tr><td>Fade and effectiveness</td></tr>
                            </td>
                            <td>
                                <tr><td>Quality control</td></tr>
                                <tr><td>Friction development</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Control Software: ProLINK</td></tr>
                                <tr><td>Drive Motor: 94 kW</td></tr>
                                <tr><td>Shaft Speed: 0 – 2000 rpm</td></tr>
                            </td>
                            <td>
                                <tr><td>Brake Torque: 5650 Nm</td></tr>
                                <tr><td>Mechanical Inertia: 19.5 – 149.5 kgm</td></tr>
                                <tr><td>Inertia Range with I-Sim: 5 – 260 kgm</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>SAE J2522 Dynamometer Global Effectiveness</td></tr>
                                <tr><td>SAE J2784 FMVSS Inertia Dynamometer Test Procedure</td></tr>
                                <tr><td>ISO 26786:2009 Friction behavior assessment for automotive brake systems</td></tr>
                            </td>
                            <td>
                                <tr><td>JASO C406:2000 Passenger car – Braking device – Dynamometer test procedure</td></tr>
                                <tr><td>ECE R90-02:2013-Annex 9 - Part A Determination of friction behavior by machine testing</td></tr>
                                <tr><td>IS0-TC22-SC2-N557 Global Spec Section 7</td></tr>
                            </td>
                        </tr>
                    </table>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m2900Dyno: {
                title : <h2>Model 2900 Automotive Brake Performance Dynamometer</h2>,
                body :
                <div>
                    <p>Model 2900 Dynamometer provides an efficient and easy to use tool to perform controlled input or output performance tests on hydraulically actuated automotive brake assemblies. The system incorporates state-of-the-art technology for optimal correlation to actual operating conditions. It enables precise and accurate measurement of performance, effectiveness, thermal capacity, and other attributes related to in-service braking. The system incorporates state-of-the-art technology for optimal correlation to actual operating conditions.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Performance</li>
                        <li>Wear</li>
                        <li>Effectiveness</li>
                        <li>Thermal capacity</li>
                    </ul>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Software: ProLINK</td></tr>
                                <tr><td>Sample Rate: 2500 samples/sec</td></tr>
                                <tr><td>Test Parts: Conventional and Knuckle brake assemblies</td></tr>
                                <tr><td>Installation: Sub frame foundation</td></tr>
                                <tr><td>Main Drive Motor: 185 kW DC</td></tr>
                            </td>
                            <td>
                                <tr><td>Max. Speed: 1150/2000 rpm (Optional 3000 rpm)</td></tr>
                                <tr><td>Pressure: 206 bar</td></tr>
                                <tr><td>Temperature: 4 rotating (telemetry) and 4 non-rotating</td></tr>
                                <tr><td>Temperature: 4 rotating (slip ring) and 4 non-rotating</td></tr>
                                <tr><td>Torque: 5640 Nm (In-Line, Non-Rotating)</td></tr>
                            </td>
                        </tr>
                    </table>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m3000Dyno: {
                title : <h2>Model 3000 Automotive Inertia Brake Dynamometer</h2>,
                body :
                <div>
                    <p>The Model 3000 Dynamometer is a full-sized system designed to evaluate braking performance characteristics of hydraulically actuated automotive and light truck brake assemblies. This state-of-the-art machine incorporates a mechanical inertia section, combined with electric motor Inertia Simulation (I-Sim) capability, to replicate actual operating conditions and has been proven to correlate with vehicle test data. The Model 3000 Dynamometer is the perfect machine for research and development testing of brake calipers, friction materials, drums, and rotors in a controlled test environment. It is highly configurable, with a wide range of optional features.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Performance</li>
                        <li>Wear</li>
                        <li>Effectiveness</li>
                        <li>Thermal capacity</li>
                    </ul>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Software: ProLINK</td></tr>
                                <tr><td>Sample Rate: 1000 samples/sec/channel</td></tr>
                                <tr><td>Fixtures: Conventional and Knuckle brakes</td></tr>
                                <tr><td>Main Drive Motor: 185 kW, Max. Speed 1150/2000 rpm, Optional 2500 rpm</td></tr>
                                <tr><td>Inertia: Minimum 4.9 kgm2, Maximum: (see Inertia Graphs)</td></tr>
                            </td>
                            <td>
                                <tr><td>Inertia Discs (standard): 1 Fixed @ 76 kgm<sup>2</sup></td></tr>
                                <tr><td>Inertia Discs (optional): 1 Fixed, 2 Removable @ 43 kgm<sup>2</sup> per disc</td></tr>
                                <tr><td>Temperature: 4 rotating (telemetry) and 4 non-rotating</td></tr>
                                <tr><td>Tailstock: Conventional or Residual Drag</td></tr>
                                <tr><td>Torque: 5640 Nm (In-Line Non-Rotating)</td></tr>
                            </td>
                        </tr>
                    </table>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m3640HighSpeedRailDyno: {
                title : <h2>Model 3640 High Speed Rail Brake Dynamometer</h2>,
                body :
                <div>
                    <p>The Model 3640 High Speed Rail Brake Dynamometer is an efficient and accurate tool for train brake performance and noise testing. It performs controlled input or output tests on pneumatically actuated brake assemblies. It precisely measures performance, effectiveness, thermal capacity, noise and vibration, and other attributes related to in- service braking. Employing four clutched mechanical discs and electrically simulated inertia, this dynamometer is able to reproduce a wide range of inertia values. Hydraulic bearing lubrication dissipates heat from the high speed inertia discs. The tailstock accommodates many different brake assembly fixtures. A Walk-in Test Chamber, Environmental Control, Automated Inertia Disc Clutches, a Thermal Camera, NVH Measurement, and a Static Torque subsystem are also available.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Train brake performance testing</li>
                        <li>Noise testing</li>
                    </ul>
                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Software: ProLINK</td></tr>
                                <tr><td>Sampling Rate: 2,000 Hz</td></tr>
                                <tr><td>Drive System: 600 kw VFAC Motor</td></tr>
                                <tr><td>Max Rotational Speed: 3100 rpm</td></tr>
                                <tr><td>Static Torque: 40 kw AC motor continuous rotation (optional)</td></tr>
                                <tr><td>Inertia: 5,000 kgm2 &lt;1,700 rpm, 2,400 kgm2 &lt;3,000 rpm, with electric simulation</td></tr>
                            </td>
                            <td>
                                <tr><td>Ambient Air Speed: 0-150 km/h</td></tr>
                                <tr><td>Temperature: -20&deg;C to +50&deg;C</td></tr>
                                <tr><td>Humidity: 10% - 90% RH (5-50&deg;C)</td></tr>
                                <tr><td>BrakE Apply System: Servo-pneumatic</td></tr>
                                <tr><td>Pressure: 12 bar Maximum</td></tr>
                                <tr><td>Force: 100 kN Maximum</td></tr>
                                <tr><td>Torque: 35,000 Nm Maximum</td></tr>
                                <tr><td>Wheel Diameter: 1250 mm Maximum</td></tr>
                            </td>
                        </tr>
                    </table>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m3900nyhDyno: {
                title : <h2>Model 3900 NVH Brake Dynamometer</h2>,
                body :
                <div>
                    <p>The full-sized Model 3900 NVH Brake Dynamometer is used to evaluate Noise, Vibration, and Harshness (NVH) of automotive and medium truck brake systems in a controlled temperature and humidity environment. Utilizing a vehicle suspension fixture, it can accurately reproduce system NVH frequencies during low-speed brake drag protocols. Available in Standard, High Speed (HS) and Heavy Duty (HD) versions, this highly configurable Dynamometer can also be used for performance brake testing.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Environmentally controlled brake NVH analysis for automotive and medium truck applications</li>
                        <li>Performance testing</li>
                    </ul>
                    <br />
                    <h3>Typical Test Procedures:</h3>
                    <ul>
                        <li>NVH Testing</li>
                        <li>SAE J2521 – Brake Squeal</li>
                        <li>Cold Matrix</li>
                        <li>Brake Torque Variation (BTV)</li>
                        <li>Low Speed, High Torque Drag Procedures</li>
                        <li>City Traffic Noise Route Simulations</li>
                        <li>All Performance Dynamometer Test Procedures</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m3900srDyno: {
                title : <h2>Model 3900-SR NVH Squeal Rig</h2>,
                body :
                <div>
                    <p>The Model 3900-SR NVH Squeal Rig is a full-sized test machine solely designed for brake noise testing on automotive and light truck applications up to 5,650 Nm. It incorporates a specially designed AC motor that delivers precise high-torque drag capability required for NVH brake testing. The unique feature of the Squeal Rig is its single fixed inertia disc, relying exclusively on inertia simulation and requires no technician disc change-outs.<br /><br />Controlled in an acoustic free field chamber, The Model 3900-SR NVH Squeal Rig has one purpose in mind, to pinpoint the source of brake noise and eliminate it through successful design enhancement testing.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                    <li>Brake Squeal testing on automotive &amp; light truck applications</li>
                    </ul>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Control Software: ProLINK</td></tr>
                                <tr><td>Sample Rate: 2000 samples/sec</td></tr>
                                <tr><td>Drive Motor: 186 kW(AC)</td></tr>
                                <tr><td>Shaft Speed: 0 - 1500 rpm</td></tr>
                                <tr><td>Brake Torque: 5650 Nm</td></tr>
                                <tr><td>Drag Torque: n/a / 100 Nm</td></tr>
                                <tr><td>Mechanical Inertia: 27.5 kgm</td></tr>
                            </td>
                            <td>
                                <tr><td>Inertia Range with I-Sim: 5 - 250 kgm<sup>2</sup></td></tr>
                                <tr><td>Brake Apply Pressure: 200 bar</td></tr>
                                <tr><td>Brake Apply Rate: 700 bar/sec / 1000 bar/sec</td></tr>
                                <tr><td>Temperature: -20 to +60 &deg;C / -40 to +60 &deg;C</td></tr>
                                <tr><td>Humidity: 15 to 95% RH</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Typical Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Noise, Vibration and Harshness Tests</td></tr>
                                <tr><td>SAE J2521 – Brake Squeal</td></tr>
                                <tr><td>Cold Matrix</td></tr>
                            </td>
                            <td>
                                <tr><td>Brake Torque Variation (BTV)</td></tr>
                                <tr><td>Low Speed High Torque Drag Procedures</td></tr>
                            </td>
                        </tr>
                    </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m4900ChassisDyno: {
                title : <h2>M-4900 - Chassis Dyno</h2>,
                body :
                <div>
                    <p>A chassis dynamometer brings laboratory testing one step closer to real world conditions while maintaining the cost and reduced development timing achieved by laboratory testing. The Model 4900 provides the capability to evaluate a wide range of vehicles and a full set of tools for control and measurement. Typical applications include powertrain, brake, tire, and interior trim evaluations.</p>
                    <br />
                    <h3>Options:</h3>
                    <ul>
                        <li>Number of Rolls &mdash; 1, 2, or 4</li>
                        <li>Roll Diameter</li>
                        <li>Number of drive motors</li>
                        <li>Roll surface finish</li>
                        <li>Automated apply systems</li>
                        <li>Test chamber type</li>
                        <li>Environmental conditioning system</li>
                        <li>Pop-up engine cooler</li>
                        <li>Under body airflow system</li>
                        <li>Data acquisition and measurement systems</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m6900HeavyTruckDyno: {
                title : <h2>Model 6900 Commercial Vehicle Brake Dynamometer</h2>,
                body :
                <div>
                    <p>The Model 6900 Dynamometer is a full-sized system robustly designed to evaluate braking performance characteristics up to 35,000 Nm for off-highway and commercial vehicle applications. The incorporation of a multi-disc inertia section combined with electric motor I-Sim capability allows the machine to replicate exact test conditions required for brake testing. It is a qualified machine for research and development of drum brakes, air disc brakes, hydraulic disc brakes, and friction material within a structured test setting that is proven to compare with full vehicle results.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Control Software: ProLINK</td></tr>
                                <tr><td>Sample Rate: 2000 samples/sec</td></tr>
                                <tr><td>Drive Motor: 186 kW / 224 kW</td></tr>
                                <tr><td>Shaft Speed: 0 - 1200 rpm / 0 - 1500 rpm</td></tr>
                                <tr><td>Brake Torque: 35,000 Nm</td></tr>
                                <tr><td>Drag Torque: - / 400 Nm</td></tr>
                                <tr><td>Mechanical Inertia: 156 - 2093 kgm<sup>2</sup> / 156 - 2689 kgm<sup>2</sup></td></tr>
                            </td>
                            <td>
                                <tr><td>Inertia Range with I-Sim: 20 - 2500 kgm<sup>2</sup> / 20 - 3000 kgm<sup>2</sup></td></tr>
                                <tr><td>Pneumatic Brake Pressure: 10 bar / 12 bar</td></tr>
                                <tr><td>Pneumatic Apply Rate: 20 bar/sec</td></tr>
                                <tr><td>Hydraulic Apply Pressure: - / 200 bar</td></tr>
                                <tr><td>Hydraulic Apply Rate: - / 700 bar/sec</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>FMVSS121</td></tr>
                                <tr><td>SAE J2115</td></tr>
                                <tr><td>European standards</td></tr>
                                <tr><td>Performance Wear</td></tr>
                            </td>
                            <td>
                                <tr><td>Durability</td></tr>
                                <tr><td>Thermal Capacity</td></tr>
                                <tr><td>City Traffic Route Simulations</td></tr>
                            </td>
                        </tr>
                    </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m8700AircraftRollDyno: {
                title : <h2>Model 8700 Aircraft Roll Dynamometer</h2>,
                body :
                <div>
                    <p>The LINK Roll Dynamometer Machine is capable of reproducing the radial and side forces acting on aircraft wheels to evaluate their integrity. This road wheel type machine functions by applying a controllable load to the test wheel and tire.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Aircraft wheel integrity</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Control System: ProLink</li>
                        <li>Maximum Radial Load: 175,000 lbs</li>
                        <li>Maximum Side Load: 60,000 lbs</li>
                        <li>Motor Size: 650 HP</li>
                        <li>Maximum Speed: 25 mph</li>
                        <li>Roll Diameter: 120”</li>
                        <li>Yaw Angle: +/- 25&deg;</li>
                        <li>Camber Control: +/- 20&deg; (Optional)</li>
                        <li>2nd Carriage: Additional test carriage (Optional)</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            m8900AircraftBrakeDyno: {
                title : <h2>Model 8900 Full-Scale Aircraft Electrical/Mechanical Inertia Dynamometer</h2>,
                body :
                <div>
                    <p>The Electrical/Mechanical Inertia Dynamometer machine simulates landing stresses on aircraft wheels and brakes by stimulating conventional and emergency braking conditions with landings speeds of up to 350 mph. The equipment is unique in that it combines mechanical and electrical energy to provide maximum testing capabilities that can simulate aircraft weight, windage, drag, thrust, and other dynamic characteristics.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Tests integrity of aircraft wheels and brakes</li>
                        <li>Finite element stress analysis on Roadwheel</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>120” dia. X 60” wide road-wheel</li>
                        <li>350 mph road-wheel surface speed</li>
                        <li>150,000 lb Radial Load</li>
                        <li>50,000 lb Drag Load</li>
                        <li>200,000 lb-ft Brake Torque Test Capacity, Continuous Rotation</li>
                        <li>5,000 psi Skydrol and mineral oil brake application system</li>
                        <li>+/- 20 degree Yaw Adjustment</li>
                        <li>6730 Horsepower Drive Capability</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            /* Test Stands */
            model200600: {
                title : <h2>MODEL 200 - MODEL 600 CHASE FRICTION MATERIAL TEST SYSTEM</h2>,
                body :
                <div>
                    <p>The Chase Friction Material Test Machines (Model 200 and Model 600) are designed and engineered to evaluate the frictional characteristics of materials used in braking systems in accordance with the SAE J661 test procedure.  The machine may be effectively utilized for quality control, research and development, or certification type applications, with highly repeatable results. Two models are available, with normal load test capacities of 890 or 2,670 N.<br /><br />The LINK Chase Friction Material Test Machine is a recognized standard throughout the world and provides precise data on frictional material performance and wear characteristics.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Research of Drum or Disc Brake Linings</td></tr>
                                <tr><td>Quality Control of Drum or Disc Brake Linings</td></tr>
                            </td>
                            <td>
                                <tr><td>European standards</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Normal Load Model 200: 0 to 890 N / Model 600: 0 to 2670 N</td></tr>
                                <tr><td>Friction Force Model 200: 0 to 445 N / Model 600: 0 to 1330 N</td></tr>
                                <tr><td>Speed: 0 to 1000 RPM</td></tr>
                                <tr><td>Temperature: 0 to 540&deg;C</td></tr>
                            </td>
                            <td>
                                <tr><td>Sample Size: 25.4 x 25.4 x 6.35 mm</td></tr>
                                <tr><td>Drag Torque: - / 400 Nm</td></tr>
                                <tr><td>Machine Size: 762 mm D x 1829 mm L x 1575 mm H</td></tr>
                                <tr><td>Approximate Weight: 1134 kg</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>SAE J661</td></tr>
                            </td>
                        </tr>
                    </table>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            mode1450LowPressureRotor: {
                title : <h2>Model 1450 Low Pressure Rotor Wear Test Machine</h2>,
                body :
                <div>
                    <p>The LINK Model 1450 Low Pressure Wear Machine is designed to generate accelerated rotor wear with the application of low-pressure drag, simulating rotor wear characteristics representative of off-brake operation.<br /><br />A fixture holds the friction sample parallel, and flat, to the rotor surface without vibration. The sample is centered for mid-radius alignment at a twelve o’clock position. The friction sample is pressed against the spinning rotor at a controlled pressure of up to 1 Bar.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Rotor wear</li>
                        <li>Off-brake operation analysis</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Sample Size: 25.4 x 12.7 cm</li>
                        <li>Motor Size: 0.75 kW</li>
                        <li>Motor Speed: 700—1100 rpm</li>
                        <li>Maximum Pressure Apply: 1 Bar</li>
                        <li>Pressure Control Accuracy: 0.034 Bar</li>
                        <li>Rotor Mounting: 3 Jaw Chuck</li>
                        <li>Radius Range: 5.3-22.9 cm</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model1620CompressibilityMachine: {
                title : <h2>Model 1620 Compressibility Machine</h2>,
                body :
                <div>
                    <p>The Model 1620 Compressibility Test Machine provides a complete workstation to evaluate the compressibility of friction materials at ambient and elevated temperatures up to 600 °C. It is offered with either a pneumatic or hydraulic actuation system and conforms to U.S. and worldwide testing requirements. The hydraulic machine provides increased control accuracy and response. Both machines provide excellent precision and repeatability to measure deflection in microns, with consistent measurements over thousands of samples.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Quality control</td></tr>
                                <tr><td>Compliance testing</td></tr>
                                <tr><td>Product development and application research</td></tr>
                            </td>
                            <td>
                                <tr><td>Brake pads/linings, clutch/wet friction/transmission discs, noise insulators, gaskets</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <tr><td>Load Control Modes: Force, Brake System pressure or Pad Surface Area Pressure</td></tr>
                                <tr><td>Cylinder Stroke Length: 40 mm / 100 mm</td></tr>
                                <tr><td>Load Capacities: 60kN or 94 kN</td></tr>
                                <tr><td>Load Capacities: 60kN or 94 kN</td></tr>
                                <tr><td>Load Control Accuracy (High Load): +/- 40 N (+/- 9.0 lb) (steady state)</td></tr>
                            </td>

                            <td>
                                <tr><td>Load Control Accuracy (Low Load): +/- 20 N (+/- 4.5 lb) (steady state)</td></tr>
                                <tr><td>Low Preload Capability: 100 N (60 kN machine) : 157 N (94 kN Machine)</td></tr>
                                <tr><td>Rate of Travel (Load Apply): 0 kN/s to 50 kN/s</td></tr>
                                <tr><td>Rate of Travel (Load Release): 0 kN/s to 50 kN/s</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>SAE J2468</td></tr>
                            </td>
                            <td>
                                <tr><td>ISO 6310</td></tr>
                            </td>
                        </tr>
                    </table>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            hydralicModel1620h: {
                title : <h2>Hydraulic Model 1620-H Compressibility Machine</h2>,
                body :
                <div>
                    <p>The Hydraulic Model 1620-H Compressibility Machine utilizes a hydraulic oil input control force versus pneumatic. The stiffer hydraulic oil provides increased control accuracy and response. The loading block has been redesigned as a lightweight component lowering the pre-load threshold.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Quality control</td></tr>
                                <tr><td>Compliance testing</td></tr>
                                <tr><td>Product development and application research</td></tr>
                            </td>
                            <td>
                                <tr><td>Brake pads/linings, clutch/wet friction/transmission discs, noise insulators, gaskets</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <tr><td>Load Control Modes: Force, Brake System pressure or Pad Surface Area Pressure</td></tr>
                                <tr><td>Cylinder Stroke Length: 100 mm (3.94 in)</td></tr>
                                <tr><td>Deflection Resolution: +/- 0.1 &#230;m (3.9 &#230;in)</td></tr>
                                <tr><td>Load Capacities: 60kN</td></tr>
                                <tr><td>Load Measurement Accuracy: +/- 0.5 %FS</td></tr>
                                <tr><td>Rate of Travel (Load Release): 0 kN/s to 150 kN/s</td></tr>
                            </td>
                            <td>
                                <tr><td>Load Control Accuracy (High Load): +/- 10 N (2.2 lb) (steady state)</td></tr>
                                <tr><td>Load Control Accuracy (Low Load): +/- 10 N (2.2 lb) (steady state)</td></tr>
                                <tr><td>Low Preload Capability: 30 N (6.7 lb)</td></tr>
                                <tr><td>Rate of Travel (Load Apply): 0 kN/s to 150 kN/s</td></tr>
                            </td>
                        </tr>
                    </table>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model2490TorqueFlexDurabilityMachine: {
                title : <h2>Model 2490 Torque Flex Durability Machine</h2>,
                body :
                <div>
                    <p>The Hydraulic Model 1620-H Compressibility Machine utilizes a hydraulic oil input control force versus pneumatic. The stiffer hydraulic oil provides increased control accuracy and response. The loading block has been redesigned as a lightweight component lowering the pre-load threshold.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Quality control</td></tr>
                                <tr><td>Compliance testing</td></tr>
                                <tr><td>Product development and application research</td></tr>
                            </td>
                            <td>
                                <tr><td>Brake pads/linings, clutch/wet friction/transmission discs, noise insulators, gaskets</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <tr><td>Load Control Modes: Force, Brake System pressure or Pad Surface Area Pressure</td></tr>
                                <tr><td>Cylinder Stroke Length: 100 mm (3.94 in)</td></tr>
                                <tr><td>Deflection Resolution: +/- 0.1 &#230;m (3.9 &#230;in)</td></tr>
                                <tr><td>Load Capacities: 60kN</td></tr>
                                <tr><td>Load Measurement Accuracy: +/- 0.5 %FS</td></tr>
                                <tr><td>Rate of Travel (Load Release): 0 kN/s to 150 kN/s</td></tr>
                            </td>
                            <td>
                                <tr><td>Load Control Accuracy (High Load): +/- 10 N (2.2 lb) (steady state)</td></tr>
                                <tr><td>Load Control Accuracy (Low Load): +/- 10 N (2.2 lb) (steady state)</td></tr>
                                <tr><td>Low Preload Capability: 30 N (6.7 lb)</td></tr>
                                <tr><td>Rate of Travel (Load Apply): 0 kN/s to 150 kN/s</td></tr>
                            </td>
                        </tr>
                    </table>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model2636BrakeFunctionalityTestStand: {
                title : <h2>Model 2636 Brake Functionality Test Stand</h2>,
                body :
                <div>
                    <p>The Model 2636 Brake Functionality Test Stand is a versatile system that can perform a number of performance and durability tests on automotive brake components. The test stand uses a hydraulic brake apply unit for durability testing, and an electric brake apply unit for high pressure (burst) testing. This machine performs piston roll back tests by applying fluid pressure to the brake caliper, simulating service conditions, and measuring movement of the brake piston when the pressure is released. It also performs knock back testing by applying a force directly to the piston with a linear actuator to stimulate additional piston movement.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Durability &amp; performance testing of automotive brake components</li>
                        <li>Piston roll back and knock back tests of automotive brake calipers</li>
                    </ul>

                    <table className="specs-table">
                        <tr>
                            <th colspan="2"><h3>Standand Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr><td>Flow Meter: Maximum Flow Volume 98 cc</td></tr>
                                    <tr><td>Flow rate: 0.2 cc/sec to 160 cc/sec</td></tr>
                                    <tr><td>Maximum Pressure: 200 Bar Hydraulic, 500 Bar electric</td></tr>
                                    <tr><td>Maximum Stroke: 25 mm</td></tr>
                                    <tr><td>Stroke Speed: 0.1 to 220 mm/sec</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>Maximum Force: 1150 N Hydraulic, 4460 N electric</td></tr>
                                    <tr><td>Force Ramp Rate: 5 to 500 N/sec</td></tr>
                                    <tr><td>6 Linear travel LVDTs</td></tr>
                                    <tr><td>3 Pressure transducers</td></tr>
                                    <tr><td>2 Fluid Displacement transducers</td></tr>
                                </table>
                            </td>
                        </tr>
                    </table>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model2876ShearTestMachine: {
                title : <h2>Model 2876 Shear Test Machine</h2>,
                body :
                <div>
                    <p>The Model 2876 Shear Test Machine is designed to evaluate the bond strength interface between a friction material pad and its backing plate for passenger car and medium truck disc brakes, typically using the SAE J840 Test Procedure. A normal load is applied during testing, such that the friction force is minimized and does not significantly affect the shear load. Fixtures are utilized to match the radius at the point of lining contact.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Passenger car brake pads</li>
                        <li>Medium truck brake pads</li>
                    </ul>
                    <br />
                    <h3>Stand Specifications:</h3>
                    <ul>
                        <li>Controls: ProLINK</li>
                        <li>Maximum Shear Load: 66,720 N</li>
                        <li>Shear Load Apply Rate: 4500 N/sec, 10 mm/min</li>
                        <li>Maximum Normal Load: 5340 N</li>
                        <li>Maximum Friction Material Pad Size: Medium Truck</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>SAE J840 Test Procedure</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model3016ResidalDragAndRTVMachine: {
                title : <h2>Model 3016 Residual Drag &amp; RTV Machine</h2>,
                body :
                <div>
                    <p>The Model 3016 is a dual-ended test machine, which can be configured for residual brake drag measurements and generation of wear induced Rotor Thickness Variation. This test system can provide overall torque variation figures, order analysis of torque variation, or reconstructed waveforms.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Measure off-brake drag</td></tr>
                                <tr><td>Evaluate Rotor Thickness Variation</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <tr><td>Software: ProLINK</td></tr>
                                <tr><td>Motor Size: 5.6 Kw AC</td></tr>
                                <tr><td>Speed Range: 2 to 1750 rpm (VFD)</td></tr>
                                <tr><td>Torque Measurement: 20 Nm, +/- 0.02 Nm</td></tr>
                                <tr><td>Maximum Brake Pressure: 138 bar</td></tr>
                                <tr><td>Fluid Displacement: 32.6 cc  (2 Gear Type units, 1 per side)</td></tr>
                                <tr><td>Rotating Temperature Measurement: Infrared pyrometer (4 units, 1 per rotor face)</td></tr>
                            </td>
                            <td>
                                <tr><td>Non-Contact Rotor Thickness Variation Measurement: 6 channels</td></tr>
                                <tr><td>Sample Rate: Up to 5,000 samples/sec</td></tr>
                                <tr><td>Maximum Rotor Diameter: 480 mm</td></tr>
                                <tr><td>Maximum Tailstock Daylight: 390 mm (Manual adjustment)</td></tr>
                                <tr><td>Machine Size: 2717.8 mm x 977.9 mm</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Residual Drag</td></tr>
                                <tr><td>Measure pressure, torque, speed, temperature, fluid displacement, Rotor Thickness Variation and rotor position</td></tr>
                            </td>
                            <td>
                                <tr><td>Adjust lateral run-out to required specifications</td></tr>
                            </td>
                        </tr>
                    </table>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model3070VehicleDTVandDragTester: {
                title : <h2>Model 3070 Vehicle DTV &amp; Drag Tester</h2>,
                body :
                <div>
                    <p>The Model 3070 Vehicle DTV &amp; Drag test system provides operators the ability to measure the inboard and outboard run-out, as well as, the Disc Thickness Variation (DTV) of a disc brake rotor on-the vehicle. The system can also measure both rolling and break-away torque.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 

                        <tr>
                            <td>
                                <tr><td>Measures inboard and outboard run-out, and Disc Thickness Variation (DTV) of a rotor on the vehicle</td></tr>
                            </td>
                            <td>
                                <tr><td>Provides the capabilities of measuring both rolling and break-away torque</td></tr>
                            </td>
                        </tr>

                        <tr>
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr>

                        <tr>
                            <td>
                                <tr><td>Control System: ProLINK</td></tr>
                                <tr><td>Electrical: 120/240 VAC, 50/60Hz</td></tr>
                                <tr><td>Motor Speed: 0 - 5 RPM continuous</td></tr>
                                <tr><td>Drive Motor Torque: 0 - 85 Nm continuous, +/- 0.15% full scale</td></tr>
                                <tr><td>Probe Range: 2.54 mm,  +/- 0.25% FS</td></tr>
                                <tr><td>Operating Temperature: 0&deg; to 30&deg;C</td></tr>
                            </td>
                            <td>
                                <tr><td>Probe Type: 4 capacitive, non-contact w/ 90&deg; quick disconnect cable</td></tr>
                                <tr><td>Wheel Drive Adapter: Adjustable to fit 3, 4 or 5 lug patterns</td></tr>
                                <tr><td>Wheel Position Encoder: 1024 ppr</td></tr>
                                <tr><td>Alignment Laser: Vertical Line Beam</td></tr>
                                <tr><td>Head Height Range: 1295-1625 mm (ground to center of test head output shaft)</td></tr>
                            </td>
                        </tr>

                        <tr>    
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 

                        <tr>
                            <td>
                                <tr><td>Measures inboard and outboard run-out of a rotor</td></tr>
                                <tr><td>Measures disc thickness variation (DTV)</td></tr>
                            </td>
                            <td>
                                <tr><td>Measures both rolling and break-away torque</td></tr>
                            </td>
                        </tr>
                    </table>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model3315RotorMappingStation: {
                title : <h2>Model 3315 Rotor Mapping Station</h2>,
                body :
                <div>
                <p>The Model 3315 Rotor Mapping Station is a precision system designed to measure Total Indicated Runout (TIR) and Disc Thickness Variation (DTV) of brake rotors. The station utilizes a precision rotary table, in conjunction with non-contact capacitive sensors capable of making very small displacement measurements between the probe face and the electrically conductive brake rotor surface.</p>

                <table className="specs-table">
                    <tr>    
                        <th colspan="2"><h3>Applications:</h3></th>
                    </tr> 
                    <tr>
                        <td>
                            <tr><td>Measures rotor run-out</td></tr>
                        </td>
                        <td>
                            <tr><td>Measures disc thickness variation (DTV)</td></tr>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2"><h3>Specifications:</h3></th>
                    </tr>
                    <tr>
                        <td>
                            <tr><td>Control System: ProLINK</td></tr>
                            <tr><td>Rotary Table: 254 mm diameter</td></tr>
                            <tr><td>Rotation: 0-360 degrees (continuous)</td></tr>
                            <tr><td>Rate of Travel: 0 to 2 rev/min</td></tr>
                            <tr><td>Incremental Encoder: 1024 counts per revolution</td></tr>
                            <tr><td>"X" Axis Slide: 203 mm travel (Automated)</td></tr>
                        </td>
                        <td>
                            <tr><td>"Z" Axis Slide: 203 mm travel (Manual)</td></tr>
                            <tr><td>Number of Probes/Channels: 2</td></tr>
                            <tr><td>Maximum Range: 2.5 mm, +/- 0.0005 mm</td></tr>
                            <tr><td>Sample Rate: 200 samples/Sec</td></tr>
                            <tr><td>Probe Type: Capacitive (non-contact - standard), LVDT (contact - optional)</td></tr>
                            <tr><td>Rotor mounting surface runout: Less than 10 micron</td></tr>
                        </td>
                    </tr>
                </table>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model3378PortableVehicleDTVandDragTester: {
                title : <h2>Model 3378 Portable Vehicle DTV &amp; Drag Tester</h2>,
                body :
                <div>
                <p>The Model 3315 Rotor Mapping Station is a precision system designed to measure Total Indicated Runout (TIR) and Disc Thickness Variation (DTV) of brake rotors. The station utilizes a precision rotary table, in conjunction with non-contact capacitive sensors capable of making very small displacement measurements between the probe face and the electrically conductive brake rotor surface.</p>

                <table className="specs-table">
                    <tr>    
                        <th colspan="2"><h3>Applications:</h3></th>
                    </tr> 
                    <tr>
                        <td>
                            <tr><td>Measures rotor run-out</td></tr>
                        </td>
                        <td>
                            <tr><td>Measures disc thickness variation (DTV)</td></tr>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2"><h3>Specifications:</h3></th>
                    </tr>
                    <tr>
                        <td>
                            <tr><td>Control System: ProLINK</td></tr>
                            <tr><td>Rotary Table: 254 mm diameter</td></tr>
                            <tr><td>Rotation: 0-360 degrees (continuous)</td></tr>
                            <tr><td>Rate of Travel: 0 to 2 rev/min</td></tr>
                            <tr><td>Incremental Encoder: 1024 counts per revolution</td></tr>
                            <tr><td>"X" Axis Slide: 203 mm travel (Automated)</td></tr>
                        </td>
                        <td>
                            <tr><td>"Z" Axis Slide: 203 mm travel (Manual)</td></tr>
                            <tr><td>Number of Probes/Channels: 2</td></tr>
                            <tr><td>Maximum Range: 2.5 mm, +/- 0.0005 mm</td></tr>
                            <tr><td>Sample Rate: 200 samples/Sec</td></tr>
                            <tr><td>Probe Type: Capacitive (non-contact - standard), LVDT (contact - optional)</td></tr>
                            <tr><td>Rotor mounting surface runout: Less than 10 micron</td></tr>
                        </td>
                    </tr>
                </table>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model3394NVHMasterCylinderTestStand: {
                title : <h2>Model 3394 NVH Master Cylinder Test Stand</h2>,
                body :
                <div>
                    <p>The Model 3394 NVH Master Cylinder Test Stand evaluates performance and Noise, Vibration and Harshness (NVH) of brake vacuum boosters and master cylinder systems. These tests are performed by applying servo-controlled stroke or force control, via a linear actuator, to the brake booster, simulating service conditions. Pumps simulate engine vacuum and perform automatic evacuation and fill of brake fluid. Disc springs simulate the brake caliper reaction force. Transducers measure displacement, stroke, pressure and load, of the brake system. A semi-anechoic chamber, microphones and Link custom software facilitate noise analysis.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Vacuum booster and master cylinder performance</li>
                        <li>NVH and Noise characteristics</li>
                        <li>Measurement of Displacement, Pressure and Load</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Fluid Displacement: Flow Meter 0.2 to 160 cc / sec (98 cc max)</li>
                        <li>Pressure: 200 Bar Max, +/- 0.1% FS</li>
                        <li>Stroke: 500 mm Maximum at +/-0.1 to 220 mm / sec</li>
                        <li>Force: 10,000 N Maximum at 5 to 500 N / sec</li>
                        <li>Data Channels: 64 at 2,000 Hz (per channel)</li>
                        <li>Electrical Supply: 30 A / 480 V / 3ph</li>
                        <li>Pneumatic Supply: 6 Bar</li>
                    </ul>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            liningWearMappingStation: {
                title : <h2>Lining Wear Mapping Station</h2>,
                body :
                <div>
                    <p>A brake pad is measured for wear in user defined locations after successive use in a dynamometer, or on a vehicle.  The brake pad is clamped in a fixture that is mounted on a servo motor driven X-Y table.  As opposed to operator micrometer checks, measurement errors are minimized by automating the gauge probes in the predefined locations.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Minimized operator error</li>
                        <li>Efficient use of time</li>
                        <li>Easy to operate</li>
                    </ul>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            shapix1500: {
                title : <h2>Shapix 1500</h2>,
                body :
                <div>
                    <p>The ShaPix 1500 System measures the profile, flatness and waviness of planar surfaces. The compact sensor design provides flexibility for specific mechanical configurations to meet particular application needs at an affordable price. The ShaPix is now available with a fully automated table to support the rotor or brake pad for inspection of thickness, Lateral Run Out, Disc Thickness Variation, and other automated dimensional measurements.<br /><br />This technology produces measurements in easy to understand, high-definition 3D picture format within minutes. The micron level visualizations produced by ShaPix enables clear understanding and communication of changes in a planar surface during testing.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Flatness &amp; waviness, profile, parallelism</td></tr>
                                <tr><td>Stitching of large surfaces</td></tr>
                                <tr><td>Full 3D analysis &amp; reporting</td></tr>
                                <tr><td>ROIs, zones, sectional plots</td></tr>
                                <tr><td>Data export, STL, Databases, CSV</td></tr>
                            </td>
                            <td>
                                <tr><td>Multi-surface relationship</td></tr>
                                <tr><td>Virtual gasket</td></tr>
                                <tr><td>Thickness uniformity</td></tr>
                                <tr><td>Gap analysis</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <tr><td>Ambient operating temperature: 18 – 25 degrees C</td></tr>
                                <tr><td>Rate of temperature change: &lt; 1 degrees C within last 10 minutes &lt; 6 degrees C within last 1 hour</td></tr>
                                <tr><td>Humidity: 12% – 80% non-condensing Class 1 Laser Product</td></tr>
                                <tr><td>Field of view (LxWxH): 150 x 150 x 225 mm</td></tr>
                            </td>
                            <td>
                                <tr><td>Working range from sensor: 25 – 250 mm</td></tr>
                                <tr><td>Lateral resolution: 80 &#230;m</td></tr>
                                <tr><td>Vertical resolution: 0.05 &#230;m</td></tr>
                            </td>
                        </tr>
                    </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            absExpertHeavyDutyBrakeDiagnosticTool: {
                title : <h2>ABS Expert Heavy-Duty Vehicle Brake Diagnostic Tool</h2>,
                body :
                <div>
                    <p>The ABS Expert Test System provides a simple and cost-effective computer-based diagnostic tool for testing heavy vehicle Antilock Braking Systems (ABS), including hydraulics. The system tests wheel speed sensors, ABS valves, ATC valves, retarder control, warning lights, and other components. Its unique design eliminates the need for multiple cartridges, cables and programs for different brands of ABS. Trailer diagnostics can also be performed with the use of the optional 7-way connector. ABS Expert is available as a complete system or as software only.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Heavy Vehicles</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Simple to use</li>
                        <li>Affordable price</li>
                        <li>Portable</li>
                        <li>Tests systems made by various manufacturers</li>
                    </ul>
                    <br />
                    <h3>Software:</h3>
                    <ul>
                        <li>Software: ABS-Expert&trade; CD</li>
                        <li>Computer cables: Two cables with 6 &amp; 9 pin Deutsch connectors, WABCO TCS-1 trailer cable, 7-way trailer cable (optional)</li>
                        <li>Accessory: Converter box</li>
                    </ul>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            airSystemExpert: {
                title : <h2>Air System Expert</h2>,
                body :
                <div>
                    <p>The Link Air System Expert is a complete, portable, computer-based system that makes it easy to verify FMVSS/CMVSS 121 air system compliance. A precision accelerometer is used to indicate first pedal movement. A laptop computer, pressure transducers, digital gage and a rugged travel case are included.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>APPLICATIONS:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <table>
                                    <tr><td>Air-Braked vehicles</td></tr>
                                    <tr><td>Service brake apply and release</td></tr>
                                    <tr><td>Park brake apply</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>Compressor build up, cut-in and cut-out</td></tr>
                                    <tr><td>Pressure differential</td></tr>
                                    <tr><td>Brake light switch activation</td></tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Key Benefits:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr><td>Measures leak down</td></tr>
                                    <tr><td>Performs pressure balance</td></tr>
                                    <tr><td>Data acquisition mode diagnoses the air system</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>ABS system diagnostics (optional)</td></tr>
                                    <tr><td>Light function (optional)</td></tr>
                                </table>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <table>
                                    <tr><td>Number Channels: 2 to 12</td></tr>
                                    <tr><td>Pressure Transducer: 0 to 34 Bar &plusmn; 0.25%, -40 to 125&deg; C</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>Data Acquisition: USB 2, 300 samples/sec</td></tr>
                                    <tr><td>Digital Gage: 0 to 345 Bar &plusmn; 0.25%, -40 to 60&deg; C</td></tr>
                                </table>
                            </td>
                        </tr>
                    </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            brakeShimDampingTestStand: {
                title : <h2>Brake Shim Damping Test Stand</h2>,
                body :
                <div>
                    <p>The Brake Shim Damping Test Stand determines the damping characteristics of shim materials. A shim is attached to a standard metal plate with an elastomer and excited by a modal hammer. The Eigenfrequencies and dampings are measured with a Laser-Doppler-Vibrometer over a temperature range from -30&deg; to +140&deg; C, in steps of 2&deg; C, with a non-contact thermal sensor, and then a map of the results is produced.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Highly efficient and time saving</li>
                        <li>Shim database stores damping as a function of frequency and temperature</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Frequency range: up to 20 kHz</li>
                        <li>Frequency resolution: &lt;5 Hz</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>Shim Testing</li>
                    </ul>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            bm14200RollerBrakeTester: {
                title : <h2>BM 14200 Roller Brake Tester</h2>,
                body :
                <div>
                <p>The BM 14200 Roller Brake tester (also known as a Performance-Based Brake Tester or PBBT) uses two large rollers and one small center roller, one meter wide, on each wheel, to test vehicles with axle loads up to 20,000 kg. Optional wider rollers and the split sub frame design allow the user to customize the track width range during installation, allowing for a wide range of wheel tracks. A rugged aluminum enclosure houses large and easy-to-read analog and digital displays of relevant test data.</p>

                <table className="specs-table">
                    <tr>    
                        <th colspan="2"><h3>Applications:</h3></th>
                    </tr> 
                    <tr>
                        <td>
                                <tr><td>Passenger cars to heavy trucks</td></tr>
                                <tr><td>Vehicle inspection centers</td></tr>
                        </td>
                        <td>
                                <tr><td>Repair shops</td></tr>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2"><h3>Key Benefits:</h3></th>
                    </tr>
                    <tr>
                        <td>
                                <tr><td>Large chain wheels minimize chain adjustments</td></tr>
                                <tr><td>Large middle roller improves damping</td></tr>
                                <tr><td>Heavy duty bearings for durability</td></tr>
                        </td>
                        <td>
                                <tr><td>High quality weight transducers</td></tr>
                                <tr><td>High strength roller axles</td></tr>
                        </td>
                    </tr>
                    <tr>    
                        <th colspan="2"><h3>Specifications:</h3></th>
                    </tr> 
                    <tr>
                        <td>
                                <tr><td>Rollerbeds (two): 910 mm L x 1285 mm W x 622 mm H</td></tr>
                                <tr><td>Rollers: 4 Main 260 mm dia, 2 Center 80 mm dia, 1000 mm wide (std)</td></tr>
                                <tr><td>Roller height above floor: 25 mm front, 70 mm rear</td></tr>
                                <tr><td>Friction coefficient of roller: Min 0.7 dry, 0.6 wet</td></tr>
                                <tr><td>High strength roller axles</td></tr>
                        </td>
                        <td>
                                <tr><td>Maximum test axle weight: 16000 kg (std), 20000 kg (optional)</td></tr>
                                <tr><td>Gear motor: 11 kW</td></tr>
                                <tr><td>Brake force: 0 to 3600 daN</td></tr>
                                <tr><td>Test speed: 2.7 km/h</td></tr>
                                <tr><td>Operating temperature: –15&deg; C to + 50&deg; C</td></tr>
                        </td>
                    </tr>
                </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model20200RollerBrakeTester: {
                title : <h2>Model 20200 Roller Brake Tester</h2>,
                body :
                <div>
                    <p>The LINK Model 20200 Roller Brake Tester is only 152 mm high above the rollers and can be placed on a garage floor or in a parking lot without a special foundation or pit. Brake forces at each wheel are measured with strain-gage type transducers. Additional sensors are available to measure air pressure, pedal force, and axle weight. The ramps quickly fold up so that one person can easily roll it out of the way. Six large rubber feet are adjustable for uneven surfaces and prevent tester movement.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Applications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Heavy Vehicles</td></tr>
                                <tr><td>Automatically tests ABS and ATC</td></tr>
                                <tr><td>Rolling Resistance - dragging brakes or wheel bearings</td></tr>
                            </td>
                            <td>
                                <tr><td>Brake Threshold Pressure - all brakes starting at the same pressure</td></tr>
                                <tr><td>Service Brake Force – proper brake function</td></tr>
                                <tr><td>Parking Brake Force - bad springs or valves</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Key Benefits:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <tr><td>Simple setup</td></tr>
                                <tr><td>One person operation without special skills</td></tr>
                            </td>
                            <td>
                                <tr><td>Check all brakes on a five-axle tractor trailer in under 10 minutes</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Rollers: 150 mm diameter</td></tr>
                                <tr><td>Vehicle Weight: 1,360 kg</td></tr>
                                <tr><td>Roller Speed; 1.0 to 2.5 kph</td></tr>
                            </td>
                            <td>
                                <tr><td>Axle Load: 15,000 kg</td></tr>
                                <tr><td>Force: 32,000 N (at ea. brake)</td></tr>
                                <tr><td>Gear motors (2): 3.7 to 11.2 kW</td></tr>
                            </td>
                        </tr>
                    </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            bm3010MobileBrakeTester: {
                title : <h2>BM 3010 Mobile Brake Tester</h2>,
                body :
                <div>
                <p>The LINK BM 3010 is an  above ground/mobile brake tester for light vehicles with axle loads up to 3500 kg and a wide range of wheel tracks. An aluminum enclosure houses large and easy-to-read analog and digital displays of relevant test data. The brake tester roller set is hot-galvanized, and can be installed either inside or outdoors.</p>


                <table className="specs-table">
                    <tr>    
                        <th colspan="2"><h3>Applications:</h3></th>
                    </tr> 
                    <tr>
                        <td>
                            <tr><td>Passenger Cars, Light Trucks and Motorcycles</td></tr>
                        </td>
                        <td>
                            <tr><td>Service and parking brakes</td></tr>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2"><h3>Key Benefits:</h3></th>
                    </tr>
                    <tr>
                        <td>
                            <tr><td>Simple setup and one handed operation</td></tr>
                            <tr><td>Proven maintenance-free design</td></tr>
                            <tr><td>Detects dragging brakes</td></tr>
                            <tr><td>Determines if all brakes start working at the same pedal force</td></tr>
                        </td>
                        <td>
                            <tr><td>Checks if brakes are functioning properly</td></tr>
                            <tr><td>Finds parking system defects</td></tr>
                            <tr><td>Identifies run out and rotor thickness/force variation as the brake rotates</td></tr>
                        </td>
                    </tr>
                    <tr>    
                        <th colspan="2"><h3>Specifications:</h3></th>
                    </tr> 
                    <tr>
                        <td>
                            <tr><td>Roller diameter / length: 150 mm / 700 to 1000 mm</td></tr>
                            <tr><td>Roller friction coefficient: 0.7 dry, 0.6 wet</td></tr>
                            <tr><td>Wheel track: 850 to 2250 mm</td></tr>
                            <tr><td>Maximum test axle weight: 3500 kg</td></tr>
                            <tr><td>Gear motor: 1.1 kW</td></tr>
                            <tr><td>Brake force: 0-100 daN +2daN, 100-700 daN: &plusmn; 2% FS</td></tr>
                        </td>
                        <td>
                            <tr><td>Test speed: 2.0 km/h</td></tr>
                            <tr><td>Display: 735mm L x 500 mm W x 140 mm H</td></tr>
                            <tr><td>Weight measurement: 0-100 kg: &plusmn; 2 kg, &gt; 100 kg &plusmn; 2 % FS</td></tr>
                            <tr><td>Pedal force measurement: 0-99 daN  &plusmn; 1 daN</td></tr>
                            <tr><td>Power: 3ph, 400 VAC</td></tr>
                        </td>
                    </tr>
                </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model100FastMachine: {
                title : <h2>Model 100 FAST Machine</h2>,
                body :
                <div>
                    <p>The Model 100 Friction Assessment and Screening Test (FAST) Machine provides a sensitive and reproducible characterization test for friction material specimens used in the development of Brake &amp; Clutch Linings. Design simplicity makes the FAST Machine a viable friction and wear tester for brake lining and clutch facing test specimens.<br /><br />The machine operates in either constant clamping or friction force modes, using a constant rubbing speed. The constant friction force mode also provides a reproducible temperature-time history for the sample.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Key Benefits:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <table>
                                    <tr><td>Friction and wear properties from sample to sample may be directly compared</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>Ideal for quality control and product development applications</td></tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr><td>Pump Pressure (Sustained): 11 Bar</td></tr>
                                    <tr><td>Clamping Pressure Limit: 700 N</td></tr>
                                    <tr><td>Maximum Friction: Force 7</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>Normal Rubbing Speed: 7 m/s</td></tr>
                                    <tr><td>Motor: .76 Kw</td></tr>
                                </table>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <table>
                                    <tr><td>Quality assurance of drum brake segments, disc brake pads, truck brake blocks, and clutch facings</td></tr>
                                    <tr><td>Friction versus load</td></tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr><td>Friction &amp; Wear</td></tr>
                                    <tr><td>Static friction</td></tr>
                                </table>
                            </td>
                        </tr>
                    </table>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model2552BoosterTestStand: {
                title : <h2>Model 2552 Booster Test Stand</h2>,
                body :
                <div>
                    <p>The Model 2552 Booster Test Stand is specifically configured to evacuate and fill the brake system with fluid and measure displacement. Tests are performed by applying pressure to the brake booster and measuring fluid displacement and movement of the mechanical components. This versatile test system is constructed of stainless steel, with a nickel-plated T-Slot base, so a variety of test parts and brake apply mechanisms can be mounted on the bench top to simulate real-life installations.</p>

                    <table className="specs-table">
                        <tr>    
                            <th colspan="2"><h3>Key Benefits:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Durable stainless steel bench</td></tr>
                                <tr><td>T-Slot base for easy fixture setup</td></tr>
                                <tr><td>Automatic brake fluid evacuation and fill</td></tr>
                                <tr><td>Generic tooling allows a wide array of test procedures</td></tr>
                                <tr><td>Linear actuator for force or stroke application</td></tr>
                            </td>
                            <td>
                                <tr><td>LINK Brake Apply System</td></tr>
                                <tr><td>Panel mounted gauges for high visibility</td></tr>
                                <tr><td>Panel mounted supply connections</td></tr>
                                <tr><td>PC based control console with ProLINK control software</td></tr>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="2"><h3>Standard Specifications:</h3></th>
                        </tr>
                        <tr>
                            <td>
                                <tr><td>Fluid Displacement: 98 cc</td></tr>
                                <tr><td>Flow Meter: 0.2 cc/sec to 160 cc/sec</td></tr>
                                <tr><td>Maximum Pressure: 200 Bar</td></tr>
                                <tr><td>Maximum Stroke: 25 mm</td></tr>
                            </td>
                            <td>
                                <tr><td>Stroke Speed: 0.1 to 220 mm/sec</td></tr>
                                <tr><td>Maximum Force: 1000 N</td></tr>
                                <tr><td>Force Ramp Rate: 5 to 500 N/sec</td></tr>
                            </td>
                        </tr>
                        <tr>    
                            <th colspan="2"><h3>Test Procedures:</h3></th>
                        </tr> 
                        <tr>
                            <td>
                                <tr><td>Performance and durability testing of automotive brake boosters</td></tr>
                            </td>
                        </tr>
                    </table>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            /* Sub Systems */
            model3945RoadLoadSimulationSystem: {
                title : <h2>Model 3945 Road Load Simulation System</h2>,
                body :
                <div>
                    <p>The Model 3945 Road Load Simulation System replicates road loads for brake tests. The system has the flexibility to impose fixed or dynamic loading during noise, judder, DTV, and wear investigations. This gives a realistic representation of what happens on a vehicle and enables the precise detection of brake noise caused by steering input. It also creates a more accurate reproduction of DTV generation. This system is an add-on to the LINK Model 3900 Dynamometer.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Reproduce loading for passenger vehicle and light truck applications</li>
                        <li>Replicates actual radial and axial road load inputs seen by the corner module during real life driving as a result of road inputs and steering</li>
                        <li>Replicates vehicle weight, dynamic weight transfer from braking, vehicle cornering, and road load roughness and vibration</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Maximum Radial Load: 25 kN (5620 lbs)</li>
                        <li>Maximum Lateral Load: +/- 17.5 kN (3934 lbs)</li>
                        <li>Lateral Load Rolling Radius Range: 2301 mm to 380 mm (10.63 in to 15.0 in)</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>SAE J2521</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model2864PassiveRoadWheel: {
                title : <h2>Model 2864 Passive Road Wheel</h2>,
                body :
                <div>
                    <p>In some cases, it is necessary or desirable to have a better representation of the entire rolling vehicle corner assembly for brake NVH testing. For brake noise frequencies below 2000 Hz, having the complete rolling assembly can create a better replication of the on-vehicle brake noise.<br /><br />The Model 2864 Passive Road Wheel is a freestanding system that incorporates a static loading mechanism that pivots the wheel assembly to provide the desired tire radial load. The vehicle corner suspension can then be used in an unmodified state with the assurance of proper loading and loaded geometry for the test.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                    <br />
                    <li>Brake NVH testing</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Actuation: Driven by Tire</li>
                        <li>Roll Diameter: 762 mm (30 in)</li>
                        <li>Roll Width: 300 mm (11.81 in)</li>
                        <li>Height Adjustment Range: 81 mm (3.19 in)</li>
                        <li>Height Adjustment Control: Manual</li>
                        <li>Load Capacity: 1363 kg (3000 lbs)</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            model5002ResidualDragTailstock: {
                title : <h2>Model 5002 Residual Drag Tailstock</h2>,
                body :
                <div>
                    <p>The Model 5002 provides the capacity to measure full scale stops with the added benefit of measuring residual drag at the most accurate levels available in the industry. The tailstock can measure both drag and full scale torque during a single test. This pneumatic bearing design utilizes mechanical locks which isolate the drag torque sensor during dynamic stops.<br /><br />The subsystem is available to purchase for use with a LINK inertia brake dynamometer or as an upgrade to many existing LINK performance dynamometers.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Measures brake-on torque</li>
                        <li>Measure brake-off torque</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Drag Torque Full Scale: 70 N&middot;m (620 in&middot;lb)</li>
                        <li>System Measurement Accuracy: +/- 0.07 N&middot;m (+/- 0.1 % FS)</li>
                        <li>Maximum Tailstock Torque: 5650 N&middot;m (50,000 in&middot;lb)</li>
                        <li>Tailstock Temperature Operating Range: 5 &deg;C to 40 &deg;C (41 &deg;F to 104 &deg;F)</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            
        }        
    ]
}

export default BrakesSubMenuData;