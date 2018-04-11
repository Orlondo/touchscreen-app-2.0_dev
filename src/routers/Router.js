import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MainMenuPage from '../components/MainMenuPage';

/* Main Menu */
import CompanyMenuPage from '../components/top-menus/CompanyMenuPage';
import ApplicationsMenuPage from '../components/top-menus/ApplicationsMenuPage';
import ServicesMenuPage from '../components/top-menus/ServicesMenuPage';

/* Company */
import AboutUsPage from '../components/company/AboutUsPage';
import WhatWeDoPage from '../components/company/WhatWeDoPage';
import CustomersPage from '../components/company/CustomersPage';
import LocationsPage from '../components/company/LocationsPage';
import MissionPage from '../components/company/MissionPage';
import TescorPage from '../components/company/TescorPage';

/* Applications */
import CustomSolutionsPage from '../components/applications/CustomSolutionsPage';
import ControlAndAcquisitionPage from '../components/applications/ControlAndAcquisitionPage';
import BrakesMenuPage from '../components/applications/BrakesMenuPage';
import WheelEndPage from '../components/applications/WheelEndPage';
import TransMissionAndDrivelinePage from '../components/applications/TransMissionAndDrivelinePage';
import SpringsPage from '../components/applications/SpringsPage';
import ServoDynamicsPage from '../components/applications/ServoDynamicsPage';

/* Services */
import TestingPage from '../components/services/TestingPage';
import ProvingGroundsPage from '../components/services/ProvingGroundsPage';
import EngineeringSolutionsPage from '../components/services/EngineeringSolutionsPage';
import AssetManagementPage from '../components/services/AssetManagementPage';

/* Brakes Menus - Secondary Menu of Applications */
import DynamometerPage from '../components/applications/brakes/DynamometerPage';
import SubSystemsPage from '../components/applications/brakes/SubSystemsPage';
import TestStandsPage from '../components/applications/brakes/TestStandsPage';

import Header from '../components/Header';
import Footer from '../components/Footer';

/*** Pages ***/

/* Tescor - Company Page */
import AutomotiveACSystemCalorimeter from '../components/company/Tescor/AutomotiveACSystemCalorimeter';
import AutomotiveConditionedAirSupply from '../components/company/Tescor/AutomotiveConditionedAirSupply';
import CodeTesterTunnels from '../components/company/Tescor/CodeTesterTunnels';
import CompressorCalorimeter from '../components/company/Tescor/CompressorCalorimeter';
import CompressorEnduranceTestStand from '../components/company/Tescor/CompressorEnduranceTestStand';
import HVACBalancedAmbientCalorimeter from '../components/company/Tescor/HVACBalancedAmbientCalorimeter';
import HVACCompressorLifeCycleTestBench from '../components/company/Tescor/HVACCompressorLifeCycleTestBench';
import HVACSurfaceCalorimeter from '../components/company/Tescor/HVACSurfaceCalorimeter';
import HVACTrailerMountedConditioningChamber from '../components/company/Tescor/HVACTrailerMountedConditioningChamber';
import LowAirFlowTestBench from '../components/company/Tescor/LowAirFlowTestBench';
import PharmaceuticalControlledRooms from '../components/company/Tescor/PharmaceuticalControlledRooms';
import PharmaceuticalFreezers from '../components/company/Tescor/PharmaceuticalFreezers';
import PharmaceuticalStandardWalkInRooms from '../components/company/Tescor/PharmaceuticalStandardWalkInRooms';
import PharmaceuticalTemperatureandHumidityControlRooms from '../components/company/Tescor/PharmaceuticalTemperatureandHumidityControlRooms';
import PhychrometricTestRooms from '../components/company/Tescor/PhychrometricTestRooms';

/* Services Pages */
// Testing
import NVHPage from '../components/services/testingPages/NVHPage';
import VehicleDynamicsPage from '../components/services/testingPages/VehicleDynamicsPage';
import PerformancePage from '../components/services/testingPages/PerformancePage';
import DurabilityPage from '../components/services/testingPages/DurabilityPage';
import Structural_FatiguePage from '../components/services/testingPages/Structural_FatiguePage';
import ChemicalPage from '../components/services/testingPages/ChemicalPage';
import CertificationPage from '../components/services/testingPages/CertificationPage';
import MeasurementPage from '../components/services/testingPages/MeasurementPage';
import CustomTestingPage from '../components/services/testingPages/CustomTestingPage';

// Proving Grounds
import OffRoadPage from '../components/services/provingGroundsPages/OffRoadPage';
import OnRoadPage from '../components/services/provingGroundsPages/OnRoadPage';

// Engineering Solutions
import TestProcessesPage from '../components/services/engineeringSolutionsPage/TestProcessesPage';
import VehicleToDynoPage from '../components/services/engineeringSolutionsPage/VehicleToDynoPage';
import TrainingPage from '../components/services/engineeringSolutionsPage/TrainingPage';
import Certifications_RegistrationsPage from '../components/services/engineeringSolutionsPage/Certifications_RegistrationsPage';

// Asset Management
import OperationAtLinkPage from '../components/services/assetManagementPages/OperationAtLinkPage';
import ScalableStaffingPage from '../components/services/assetManagementPages/ScalableStaffingPage';

/* Applications Pages */
// Custom Solutions
import BiAxialVibrationsPage from '../components/applications/customSolutionsPages/BiAxialVibrationPage';
import ExhaustCorrosionFatiguePage from '../components/applications/customSolutionsPages/ExhaustCorrosionFatiguePage';
import SeatVibrationTesterPage from '../components/applications/customSolutionsPages/SeatVibrationTesterPage';
import SteeringAssmeblyTestStandPage from '../components/applications/customSolutionsPages/SteeringAssmeblyTestStandPage';
import SteeringPumpTestSystemPage from '../components/applications/customSolutionsPages/SteeringPumpTestSystemPage';
import Exciter3dPage from '../components/applications/customSolutionsPages/Exciter3dPage';
import BallJointBootTestMachinePage from '../components/applications/customSolutionsPages/BallJointBootTestMachinePage';
import BolsterSpringQCTestSystemPage from '../components/applications/customSolutionsPages/BolsterSpringQCTestSystemPage';

// Control & Acquisition
import DynoViewPage from '../components/applications/control_acquisition/DynoViewPage';
import M4275ethernetPage from '../components/applications/control_acquisition/M4275ethernetPage';
import LabLinkPage from '../components/applications/control_acquisition/LabLinkPage';
import LinkSquealReportPage from '../components/applications/control_acquisition/LinkSquealReportPage';
import VMaxPage from '../components/applications/control_acquisition/VMaxPage';
import ProlinkPage from '../components/applications/control_acquisition/ProlinkPage';
import RegensimPage from '../components/applications/control_acquisition/RegensimPage';
import RevdataPlusPage from '../components/applications/control_acquisition/RevdataPlusPage';
import ScriptEditPage from '../components/applications/control_acquisition/ScriptEditPage';

// Brakes - Dynamometer
import M1200DynoPage from '../components/applications/brakes/Dynamometer/M1200DynoPage';
import M1400DynoPage from '../components/applications/brakes/Dynamometer/M1400DynoPage';
import M2000FrictionStandardDynoPage from '../components/applications/brakes/Dynamometer/M2000FrictionStandardDynoPage';
import M2900DynoPage from '../components/applications/brakes/Dynamometer/M2900DynoPage';
import M3000DynoPage from '../components/applications/brakes/Dynamometer/M3000DynoPage';
import M3640HighSpeedRailDynoPage from '../components/applications/brakes/Dynamometer/M3640HighSpeedRailDynoPage';
import M3900NVHDynoPage from '../components/applications/brakes/Dynamometer/M3900NVHDynoPage';
import M3900SRDynoPage from '../components/applications/brakes/Dynamometer/M3900SRDynoPage';
import M4900ChassisDynoPage from '../components/applications/brakes/Dynamometer/M4900ChassisDynoPage';
import M6900HeavyTruckDynoPage from '../components/applications/brakes/Dynamometer/M6900HeavyTruckDynoPage';
import M8700AircraftRollDynoPage from '../components/applications/brakes/Dynamometer/M8700AircraftRollDynoPage';
import M8900AircraftBrakeDynoPage from '../components/applications/brakes/Dynamometer/M8900AircraftBrakeDynoPage';

// Brakes - Test Stands
import ABSExpertHeavyDutyBrake from '../components/applications/brakes/SubSystems/ABSExpertHeavyDutyBrake';
import airSystemExpert from '../components/applications/brakes/SubSystems/airSystemExpert';
import BM3010MobileBrakeTester from '../components/applications/brakes/SubSystems/BM3010MobileBrakeTester';
import bm14200RollerBrakeTester from '../components/applications/brakes/SubSystems/bm14200RollerBrakeTester';
import brakeShimDampingTestStand from '../components/applications/brakes/SubSystems/brakeShimDampingTestStand';
import HydraulicModel1620hPage from '../components/applications/brakes/SubSystems/HydraulicModel1620hPage';
import liningWearMappingStation from '../components/applications/brakes/SubSystems/liningWearMappingStation';
import M200_600chaseFrictionMaterialPage from '../components/applications/brakes/SubSystems/M200_600chaseFrictionMaterialPage';
import M1450LowPressureRotorWearPage from '../components/applications/brakes/SubSystems/M1450LowPressureRotorWearPage';
import model100FastMachine from '../components/applications/brakes/SubSystems/model100FastMachine';

import Model1620CompressibilityMachinePage from '../components/applications/brakes/SubSystems/Model1620CompressibilityMachinePage';
import Model2490TorqueFlexDurabilityPage from '../components/applications/brakes/SubSystems/Model2490TorqueFlexDurabilityPage';
import model2552BoosterTestStand from '../components/applications/brakes/SubSystems/model2552BoosterTestStand';
import model2636BrakeFunctionalityTest from '../components/applications/brakes/SubSystems/model2636BrakeFunctionalityTest';
import model2876ShearTestMachine from '../components/applications/brakes/SubSystems/model2876ShearTestMachine';
import model3016ResidualDrag_RTV from '../components/applications/brakes/SubSystems/model3016ResidualDrag_RTV';
import model3070VehicleDTV_DragTester from '../components/applications/brakes/SubSystems/model3070VehicleDTV_DragTester';
import model3315RotorMappingStation from '../components/applications/brakes/SubSystems/model3315RotorMappingStation';
import model3378PortableVehicleDTV_Drag from '../components/applications/brakes/SubSystems/model3378PortableVehicleDTV_Drag';
import model3394NVHMasterCylinderTest from '../components/applications/brakes/SubSystems/model3394NVHMasterCylinderTest';
import model20200RollerBrakeTester from '../components/applications/brakes/SubSystems/model20200RollerBrakeTester';
import shapix1500 from '../components/applications/brakes/SubSystems/shapix1500';

// Brakes - Sub Systems
import model2864PassiveRoadWheel from '../components/applications/brakes/TestStands/model2864PassiveRoadWheel';
import model3945RoadLoadSimulation from '../components/applications/brakes/TestStands/model3945RoadLoadSimulation';
import model5002ResidualDragTailstock from '../components/applications/brakes/TestStands/model5002ResidualDragTailstock';

// Wheel End 
import CorneringFatiguePage from "../components/applications/wheelEndPages/CorneringFatiguePage";
import RotaryFatiguePage from "../components/applications/wheelEndPages/RotaryFatiguePage";
import HubBearingPage from "../components/applications/wheelEndPages/HubBearingPage";
import EccentricMassWheelPage from "../components/applications/wheelEndPages/EccentricMassWheelPage";
import BearingTestPage from "../components/applications/wheelEndPages/BearingTestPage";
import RadialFatiguePage from "../components/applications/wheelEndPages/RadialFatiguePage";
import BearingEndurancePage from "../components/applications/wheelEndPages/BearingEndurancePage";
import WheelImpactTesterPage from "../components/applications/wheelEndPages/WheelImpactTesterPage";
import BiAxialWheelTesterPage from "../components/applications/wheelEndPages/BiAxialWheelTesterPage";


// Transmission & Driveline
import AxleTestRigPage from '../components/applications/Transmission_Driveline/AxleTestRigPage';
import BallJointBootTestMachinePage_TD from '../components/applications/Transmission_Driveline/BallJointBootTestSystemPage';
import M1158T04MachinePage from '../components/applications/Transmission_Driveline/M1158T04MachinePage';
import M2190AutoTransHighSpeedPage from '../components/applications/Transmission_Driveline/M2190AutoTransHighSpeedPage';
import M2909ManualClutchDurabilityPage from '../components/applications/Transmission_Driveline/M2909ManualClutchDurabilityPage';
import M1850SixSquareTestStandPage from '../components/applications/Transmission_Driveline/M1850SixSquareTestStandPage';
import AxleImpactTesterPage from '../components/applications/Transmission_Driveline/AxleImpactTesterPage';
import TwoSquarePage from '../components/applications/Transmission_Driveline/TwoSquarePage';
import FourSquareDrivelineTestSystemPage from '../components/applications/Transmission_Driveline/AxleTestRigPage';
import TransmissionTorqueCyclingDurabilityPage from '../components/applications/Transmission_Driveline/TransmissionTorqueCyclingDurabilityPage';
import SAENo2TestStandPage from '../components/applications/Transmission_Driveline/SAENo2TestStandPage';
import ElectricVehicleMotorDrivelineTestStandPage from '../components/applications/Transmission_Driveline/ElectricVehicleMotorDrivelineTestStandPage';

// Springs
import DigitalSULunitPage from '../components/applications/springPages/DigitalSULunitPage';
import MEL1SpringTesterPage from '../components/applications/springPages/MEL1SpringTesterPage';
import M0873SULMasterRingSetPage from '../components/applications/springPages/M0873SULMasterRingSetPage';
import M3700DisplayModulePage from '../components/applications/springPages/M3700DisplayModulePage';
import MT4ASpringTesterPage from '../components/applications/springPages/MT4ASpringTesterPage';
import MT4BSpringTesterPage from '../components/applications/springPages/MT4BSpringTesterPage';
import MT4xySpringTesterPage from '../components/applications/springPages/MT4xySpringTesterPage';

// Servo Dynamics
import ActuatorsLinearPage from '../components/applications/ServoDynamicsPages/ActuatorsLinearPage';
import ActuatorsRotaryPage from '../components/applications/ServoDynamicsPages/ActuatorsRotaryPage';
import BallJointsPage from '../components/applications/ServoDynamicsPages/BallJointsPage';
import CrossPortBleedPlatesPage from '../components/applications/ServoDynamicsPages/CrossPortBleedPlatesPage';
import TestController3500Page from '../components/applications/ServoDynamicsPages/TestController3500Page';
import HydraulicControlManofoldsPage from '../components/applications/ServoDynamicsPages/HydraulicControlManofoldsPage';
import HydraulicPowerSupplyPage from '../components/applications/ServoDynamicsPages/HydraulicPowerSupplyPage';
import LoadCalibrationStandPage from '../components/applications/ServoDynamicsPages/LoadCalibrationStandPage';
import SpiralWashersPage from '../components/applications/ServoDynamicsPages/SpiralWashersPage';
import SwivelsPage from '../components/applications/ServoDynamicsPages/SwivelsPage';
import TableTopLoadFramePage from '../components/applications/ServoDynamicsPages/TableTopLoadFramePage';
import DeltaPThruHoleMountingPlatePage from '../components/applications/ServoDynamicsPages/DeltaPThruHoleMountingPlatePage';
import HighStrengthStudsPage from '../components/applications/ServoDynamicsPages/HighStrengthStudsPage';
import HydraulicPipingPage from '../components/applications/ServoDynamicsPages/HydraulicPipingPage';
import HydrostaticBearingActuatorsPage from '../components/applications/ServoDynamicsPages/HydrostaticBearingActuatorsPage';
import LCALinearServoRatedActuator from '../components/applications/ServoDynamicsPages/LCALinearServoRatedActuator';
import LHAFatigueRatedHydrostaticBearingActuatorPage from '../components/applications/ServoDynamicsPages/LHAFatigueRatedHydrostaticBearingActuatorPage';
import LPAFatigueratedActuatorPage from '../components/applications/ServoDynamicsPages/LPAFatigueratedActuatorPage';
import SRASeriesSpinningRotatyActuatorsPage from '../components/applications/ServoDynamicsPages/SRASeriesSpinningRotatyActuatorsPage';
import StructuralLoadFramesPage from '../components/applications/ServoDynamicsPages/StructuralLoadFramesPage';


const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={MainMenuPage} exact={true} />

                {/***----- MENUS -----***/}

                {/* Top Menus */}
                <Route path="/company" component={CompanyMenuPage} exact={true} />
                <Route path="/applications" component={ApplicationsMenuPage} exact={true} />
                <Route path="/services" component={ServicesMenuPage} exact={true} />
                
                {/* Company Menu */}
                <Route path="/about-us" component={AboutUsPage} exact={true} />
                <Route path="/what-we-do" component={WhatWeDoPage} exact={true} />
                <Route path="/customers" component={CustomersPage} exact={true} />
                <Route path="/locations" component={LocationsPage} exact={true} />
                <Route path="/mission" component={MissionPage} exact={true} />
                <Route path="/tescor" component={TescorPage} exact={true} />

                {/* Applications Menu */}
                <Route path="/custom-solutions" component={CustomSolutionsPage} exact={true} />
                <Route path="/control&acquisition" component={ControlAndAcquisitionPage} exact={true} />
                <Route path="/brakes-menu" component={BrakesMenuPage} exact={true} />
                <Route path="/wheel-end" component={WheelEndPage} exact={true} />
                <Route path="/transmission&driveline" component={TransMissionAndDrivelinePage} exact={true} />
                <Route path="/springs" component={SpringsPage} exact={true} />
                <Route path="/servo-dynamics" component={ServoDynamicsPage} exact={true} />

                {/* Services Menu */}
                <Route path="/testing" component={TestingPage} exact={true} />
                <Route path="/proving-grounds" component={ProvingGroundsPage} exact={true} />
                <Route path="/engineering-solutions" component={EngineeringSolutionsPage} exact={true} />
                <Route path="/asset-management" component={AssetManagementPage} exact={true} />

                {/* Brakes Menu */}
                <Route path="/dynamometer" component={DynamometerPage} exact={true} />
                <Route path="/test-stands" component={TestStandsPage} exact={true} />
                <Route path="/sub-systems" component={SubSystemsPage} exact={true} />

                {/***----- PAGES -----***/}

                {/*-- Company Pages --*/}
                {/* Tescor Pages */}

                <Route path="/automotiveACSystemCalorimeter" component={AutomotiveACSystemCalorimeter} exact={true} />
                <Route path="/AutomotiveConditionedAirSupply" component={AutomotiveConditionedAirSupply} exact={true} />
                <Route path="/CodeTesterTunnels" component={CodeTesterTunnels} exact={true} />
                <Route path="/CompressorCalorimeter" component={CompressorCalorimeter} exact={true} />
                <Route path="/CompressorEnduranceTestStand" component={CompressorEnduranceTestStand} exact={true} />
                <Route path="/HVACBalancedAmbientCalorimeter" component={HVACBalancedAmbientCalorimeter} exact={true} />
                <Route path="/HVACCompressorLifeCycleTestBench" component={HVACCompressorLifeCycleTestBench} exact={true} />
                <Route path="/HVACSurfaceCalorimeter" component={HVACSurfaceCalorimeter} exact={true} />
                <Route path="/HVACTrailerMountedConditioningChamber" component={HVACTrailerMountedConditioningChamber} exact={true} />
                <Route path="/LowAirFlowTestBench" component={LowAirFlowTestBench} exact={true} />
                <Route path="/PharmaceuticalControlledRooms" component={PharmaceuticalControlledRooms} exact={true} />
                <Route path="/PharmaceuticalFreezers" component={PharmaceuticalFreezers} exact={true} />
                <Route path="/PharmaceuticalStandardWalkInRooms" component={PharmaceuticalStandardWalkInRooms} exact={true} />
                <Route path="/PharmaceuticalTemperatureandHumidityControlRooms" component={PharmaceuticalTemperatureandHumidityControlRooms} exact={true} />
                <Route path="/PhychrometricTestRooms" component={PhychrometricTestRooms} exact={true} />

                {/*-- Services Pages --*/}

                {/* Testing Pages */}
                <Route path="/nvh" component={NVHPage} exact={true} />
                <Route path="/vehicle-dynamics" component={VehicleDynamicsPage} exact={true} />
                <Route path="/performance" component={PerformancePage} exact={true} />
                <Route path="/durability" component={DurabilityPage} exact={true} />
                <Route path="/structural-fatigue" component={Structural_FatiguePage} exact={true} />
                <Route path="/chemical" component={ChemicalPage} exact={true} />
                <Route path="/certification" component={CertificationPage} exact={true} />
                <Route path="/measurement" component={MeasurementPage} exact={true} />
                <Route path="/custom_testing" component={CustomTestingPage} exact={true} />

                 {/* Proving Grounds Pages */}
                 <Route path="/offRoad" component={OffRoadPage} exact={true} />
                 <Route path="/onRoad" component={OnRoadPage} exact={true} />

                 {/* Engineering Solutions Pages */}
                 <Route path="/testProcesses" component={TestProcessesPage} exact={true} />
                 <Route path="/vehicleToDyno" component={VehicleToDynoPage} exact={true} />
                 <Route path="/training" component={TrainingPage} exact={true} />
                 <Route path="/certifications_registrations" component={Certifications_RegistrationsPage} exact={true} />

                 {/* Asset Management Pages */}
                 <Route path="/operationsAtLink" component={OperationAtLinkPage} exact={true} />
                 <Route path="/scalableStaffing" component={ScalableStaffingPage} exact={true} />
                
                {/*-- Applications Pages --*/}

                {/* Custom Solutions Pages */}
                <Route path="/biAxialVibrations" component={BiAxialVibrationsPage} exact={true} />
                <Route path="/exhaustCorrosionFatigue" component={ExhaustCorrosionFatiguePage} exact={true} />
                <Route path="/seatVibrationTester" component={SeatVibrationTesterPage} exact={true} />
                <Route path="/steeringAssemblyTestStand" component={SteeringAssmeblyTestStandPage} exact={true} />
                <Route path="/steeringPumpTestSystem" component={SteeringPumpTestSystemPage} exact={true} />
                <Route path="/exciter3D" component={Exciter3dPage} exact={true} />
                <Route path="/ballJointBootTestMachine" component={BallJointBootTestMachinePage} exact={true} />
                <Route path="/bolsterSpringQCTestSystem" component={BolsterSpringQCTestSystemPage} exact={true} />

                {/* Control & Acquisition Pages */}
                <Route path="/dyno_view" component={DynoViewPage} exact={true} />
                <Route path="/m-4275_ethernet_data_acquisition_&_control" component={M4275ethernetPage} exact={true} />
                <Route path="/LabLINK" component={LabLinkPage} exact={true} />
                <Route path="/LINK_squeal_report_application" component={LinkSquealReportPage} exact={true} />
                <Route path="/v-max_4000_data_acquisition_system" component={VMaxPage} exact={true} />
                <Route path="/proLINK" component={ProlinkPage} exact={true} />
                <Route path="/regenSIM" component={RegensimPage} exact={true} />
                <Route path="/revdata_plus" component={RevdataPlusPage} exact={true} />
                <Route path="/script_edit" component={ScriptEditPage} exact={true} />

                {/* Brakes Pages - Dynamometer */}
                <Route path="/m1200Dyno" component={M1200DynoPage} exact={true} />
                <Route path="/m1400Dyno" component={M1400DynoPage} exact={true} />
                <Route path="/m2000FrictionStandardDyno" component={M2000FrictionStandardDynoPage} exact={true} />
                <Route path="/m2900Dyno" component={M2900DynoPage} exact={true} />
                <Route path="/m3000Dyno" component={M3000DynoPage} exact={true} />
                <Route path="/m3640HighSpeedRailDyno" component={M3640HighSpeedRailDynoPage} exact={true} />
                <Route path="/m3900NVHDyno" component={M3900NVHDynoPage} exact={true} />
                <Route path="/m3900SRDyno" component={M3900SRDynoPage} exact={true} />
                <Route path="/m4900ChassisDyno" component={M4900ChassisDynoPage} exact={true} />
                <Route path="/m6900HeavyTruckDyno" component={M6900HeavyTruckDynoPage} exact={true} />
                <Route path="/m8700AircraftRollDyno" component={M8700AircraftRollDynoPage} exact={true} />
                <Route path="/m8900AircraftBrakeDyno" component={M8900AircraftBrakeDynoPage} exact={true} />

                {/* Brakes Pages - Test Stands */}
                <Route path="/m200_600chaseFrictionMaterial" component={M200_600chaseFrictionMaterialPage} exact={true} />
                <Route path="/m1450LowPressureRotorWear" component={M1450LowPressureRotorWearPage} exact={true} />
                <Route path="/model1620CompressibilityMachine" component={Model1620CompressibilityMachinePage} exact={true} />
                <Route path="/hydraulicModel1620h" component={HydraulicModel1620hPage} exact={true} />
                <Route path="/model2490TorqueFlexDurability" component={Model2490TorqueFlexDurabilityPage} exact={true} />
                <Route path="/model2636BrakeFunctionalityTest" component={model2636BrakeFunctionalityTest} exact={true} />
                <Route path="/model3016ResidualDrag_RTV" component={model3016ResidualDrag_RTV} exact={true} />
                <Route path="/model2876ShearTestMachine" component={model2876ShearTestMachine} exact={true} />
                <Route path="/model3070VehicleDTV_DragTester" component={model3070VehicleDTV_DragTester} exact={true} />
                <Route path="/model3315RotorMappingStation" component={model3315RotorMappingStation} exact={true} />
                <Route path="/model3378PortableVehicleDTV_Drag" component={model3378PortableVehicleDTV_Drag} exact={true} />
                <Route path="/model3394NVHMasterCylinderTest" component={model3394NVHMasterCylinderTest} exact={true} />
                <Route path="/liningWearMappingStation" component={liningWearMappingStation} exact={true} />
                <Route path="/shapix1500" component={shapix1500} exact={true} />
                <Route path="/ABSExpertHeavyDutyBrake" component={ABSExpertHeavyDutyBrake} exact={true} />
                <Route path="/airSystemExpert" component={airSystemExpert} exact={true} />
                <Route path="/brakeShimDampingTestStand" component={brakeShimDampingTestStand} exact={true} />
                <Route path="/bm14200RollerBrakeTester" component={bm14200RollerBrakeTester} exact={true} />
                <Route path="/model20200RollerBrakeTester" component={model20200RollerBrakeTester} exact={true} />
                <Route path="/BM3010MobileBrakeTester" component={BM3010MobileBrakeTester} exact={true} />
                <Route path="/model100FastMachine" component={model100FastMachine} exact={true} />
                <Route path="/model2552BoosterTestStand" component={model2552BoosterTestStand} exact={true} />

                {/* Brakes Pages - Sub Systems */}
                <Route path="/model3945RoadLoadSimulation" component={model3945RoadLoadSimulation} exact={true} />
                <Route path="/model2864PassiveRoadWheel" component={model2864PassiveRoadWheel} exact={true} />
                <Route path="/model5002ResidualDragTailstock" component={model5002ResidualDragTailstock} exact={true} />

                {/* Wheel End Pages */}
                <Route path="/m-1750_cornering_fatigue" component={CorneringFatiguePage} exact={true} />
                <Route path="/m-2500_rotary_fatigue" component={RotaryFatiguePage} exact={true} />
                <Route path="/m-2938_hub_bearing" component={HubBearingPage} exact={true} />
                <Route path="/model_3526_eccentric_mass_wheel" component={CorneringFatiguePage} exact={true} />
                <Route path="/m-3546-bearing_testing" component={BearingTestPage} exact={true} />
                <Route path="/m-3830_radial_fatigue" component={RadialFatiguePage} exact={true} />
                <Route path="/m-3928_bearing_endurance" component={BearingEndurancePage} exact={true} />
                <Route path="/m-1230_wheel_impact_tester" component={WheelImpactTesterPage} exact={true} />
                <Route path="/m-3536_biaxial_wheel_tester" component={BiAxialWheelTesterPage} exact={true} />

                {/* Transmission & Driveline Pages */}
                <Route path="/axle_test_rig" component={AxleTestRigPage} exact={true} />
                <Route path="/ball_joint_boot_test_systems" component={BallJointBootTestMachinePage_TD} exact={true} />
                <Route path="/m-1158_to-4_machine" component={M1158T04MachinePage} exact={true} />
                <Route path="/m-2190_auto_trans_high_speed" component={M2190AutoTransHighSpeedPage} exact={true} />
                <Route path="/m-2909_manual_clutch_durability" component={M2909ManualClutchDurabilityPage} exact={true} />
                <Route path="/m-1850_six_square_test_stand" component={M1850SixSquareTestStandPage} exact={true} />
                <Route path="/axle_impact_tester" component={AxleImpactTesterPage} exact={true} />
                <Route path="/two_square" component={TwoSquarePage} exact={true} />
                <Route path="/4-Square_driveline_test_system" component={FourSquareDrivelineTestSystemPage} exact={true} />
                <Route path="/transmission_torque_cycling_durability" component={TransmissionTorqueCyclingDurabilityPage} exact={true} />
                <Route path="/sae_no._2_test_stand" component={SAENo2TestStandPage} exact={true} />
                <Route path="/electric_vehicle_motor_&_driveline_test_stand" component={ElectricVehicleMotorDrivelineTestStandPage} exact={true} />
                
                {/* Springs Pages */}
                <Route path="/digital_sul_unit" component={DigitalSULunitPage} exact={true} />
                <Route path="/m-el1_spring_tester" component={MEL1SpringTesterPage} exact={true} />
                <Route path="/m-0873_sul_master_ring_set" component={M0873SULMasterRingSetPage} exact={true} />
                <Route path="/m-3700_display_module" component={M3700DisplayModulePage} exact={true} />
                <Route path="/m-t4a_spring_tester" component={MT4ASpringTesterPage} exact={true} />
                <Route path="/m-t4b_spring_tester" component={MT4BSpringTesterPage} exact={true} />
                <Route path="/m-t4-xy_spring_tester" component={MT4xySpringTesterPage} exact={true} />

                {/* Servo Dynamics Pages */}
                <Route path="/actuatorsLinear" component={ActuatorsLinearPage} exact={true} />
                <Route path="/actuatorsRotary" component={ActuatorsRotaryPage} exact={true} />
                <Route path="/ballJoints" component={BallJointsPage} exact={true} />

                <Route path="/crossPortBleedPlates" component={CrossPortBleedPlatesPage} exact={true} />
                <Route path="/3500TestController" component={TestController3500Page} exact={true} />
                <Route path="/hydraulicControlManifolds" component={HydraulicControlManofoldsPage} exact={true} />
                <Route path="/hydraulicPowerSupply" component={HydraulicPowerSupplyPage} exact={true} />
                <Route path="/loadCalibrationStand" component={LoadCalibrationStandPage} exact={true} />
                <Route path="/spiralWashers" component={SpiralWashersPage} exact={true} />
                <Route path="/swivels" component={SwivelsPage} exact={true} />
                <Route path="/tableTopLoadFrame" component={TableTopLoadFramePage} exact={true} />
                <Route path="/delta-pThruHoleMountingPlates" component={DeltaPThruHoleMountingPlatePage} exact={true} />
                <Route path="/highStrengthStuds" component={HighStrengthStudsPage} exact={true} />
                <Route path="/hydraulicPiping" component={HydraulicPipingPage} exact={true} />
                <Route path="/hydrostaticBearingActuators" component={HydrostaticBearingActuatorsPage} exact={true} />
                <Route path="/lcaLinearServoRatedActuator" component={LCALinearServoRatedActuator} exact={true} />
                <Route path="/lhaFatigueRatedHydrostaticBearingActuator" component={LHAFatigueRatedHydrostaticBearingActuatorPage} exact={true} />
                <Route path="/lpaFatigueRatedActuators" component={LPAFatigueratedActuatorPage} exact={true} />
                <Route path="/SRASeriesSpinningRotaryActuators" component={SRASeriesSpinningRotatyActuatorsPage} exact={true} />
                <Route path="/structuralLoadFrames" component={StructuralLoadFramesPage} exact={true} />

                

            </Switch>
            <Header />
            <Footer />       
        </div>
    </BrowserRouter>  
);

export default Router;