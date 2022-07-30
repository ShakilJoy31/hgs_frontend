import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import aboutUs from './../assets/images/admission-cover.JPG'
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import sosChildrenVillage from './../assets/images/sos_logo 3.png';

const Admission = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs }) => {
    const navigate = useNavigate();
    const handleOverView = () => {
        setOverview[1]('setOverview')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('')
        setShowNavbar[1](false);
        navigate('/')
    }
    const handleLeadership = () => {
        setShowNavbar[1](true)
        setOverview[1]('')
        setLidership[1]('setLidership')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('')
        navigate('/leadership')
    }
    const handleProgramsOffered = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('setProgramsOffered')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true);
        setContactUs[1]('')
        navigate('/programesOffered')
    }
    const handleAlumni = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('setAlumni')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true);
        setContactUs[1]('')
        navigate('/alumni')
    }
    const handleAdmission = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('setAdmission[1]')
        setShowNavbar[1](true);
        setFacultiStaff[1]('')
        setContactUs[1]('')
        navigate('/admission')
    }
    const handleFaculty = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](false);
        setAdmission[1]('')
        setFacultiStaff[1]('setFacultiStaff[1]')
        setContactUs[1]('')
        navigate('/faculty')
    }
    const handleContact = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](false);
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('setContactUs[1]')
        navigate('/contact')
    }
    return (
        <div>
            <img  onClick={handleOverView} className='w-48 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
            <img className='w-full' src={aboutUs} alt="" />
            <div className='flex justify-center'>
                <div className='mt-6 ml-10'>
                    <div className='leadership'>
                        <p onClick={handleOverView} className='flex items-center h-12 my-2 forTextHover'>Overview</p>
                        <p onClick={handleLeadership} className='flex items-center h-12 my-2 forTextHover'>Leadership</p>
                        <p onClick={handleProgramsOffered} className='flex items-center h-12 my-2 forTextHover'>Programs Offered</p>
                        <p onClick={handleAlumni} className='flex items-center h-12 my-2 forTextHover'>Alumni</p>
                        <p onClick={handleAdmission} className='flex items-center h-12 my-2 forTextHover'>Admission</p>
                        <p onClick={handleFaculty} className='flex items-center h-12 my-2 forTextHover'>Faculty & Staff</p>
                        <p onClick={handleContact} className='flex items-center h-12 my-2 forTextHover'>Contact Us</p>
                    </div>


                    <div className='leadership-info'>
                        <div className='flex items-center justify-center'>
                            <img className='mr-4' src={location} alt="" />
                            <p className='flex forTextHover'>J N Kaul Institute of Education Bhimtal SOS Complex, Tallital Bhimtal Nainital, Uttrakhand, India, 263136</p>
                        </div>
                        <div className='flex items-center justify-center my-4'>
                            <img className='ml-2 mr-4' src={email} alt="" />
                            <p className='flex forTextHover'>Principal.bhimtalbed@soscvindia.org </p>
                        </div>
                        <div className='flex'>
                            <img className='mr-4' src={phone} alt="" />
                            <p className='flex forTextHover'>05942-247999</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[50px] ml-6 mr-6 mt-2">
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <div className=''>
                                <h1 className='mt-4 mb-8 text-5xl leadership-heading'>Admission</h1>
                                <h1 className='mb-2 text-3xl font-bold'>Admission Criteria</h1>


                                <div className='mb-6'>
                                    <p className='block mx-auto mb-2 text-xl font-bold'>Kumaun University B.Ed Entrance Exam 2021</p>
                                    <p className='mt-2'>
                                        Kumaun University will release notification for B.Ed admission 2021. The B.Ed entrance exam 2021 will beheld as per schedule. The candidates who qualify for the entrance test are then required to participate in the counseling.
                                    </p>
                                </div>


                                <div className='mb-6'>
                                    <p className='mb-2 text-xl font-bold'>Kumaun University B.Ed 2021 Application Form</p>
                                    <p className='mt-2 '>
                                        Candidates have to register themselves for the exam through the Kumaun University B.Ed 2021 application
                                        form. First and foremost they have to pay the application fees through prescribed mode only. It is advised that
                                        the candidates provide authentic information as that record will be forwarded to the university and once
                                        submitted it will not be changed. Candidates will be able to fill their application form 24 hours after they have
                                        submitted their application fees.
                                    </p>
                                </div>


                                <div className='mb-6'>
                                    <span className='mb-2 text-xl font-bold'>Application fees: </span> <span>As per last year.</span>
                                    <div>
                                        <ul className='ml-10'>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>For B.ED the application fees is – 1250+ Bank charges (If any)</p>
                                            </li>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Apply for Online Registration</p>
                                            </li>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Pay Examination Fee (Online/Challan Mode/NEFT/RTGS)</p>
                                            </li>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Fill Online Application Form</p>
                                            </li>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Download Final Application</p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>



                                <div className='mb-6'>
                                    <p className='mb-2 text-xl font-bold'>Kumaun University B.Ed 2021 Eligibility Criteria</p>
                                    <p className='mt-2 mb-4 '>
                                        It is highly recommended that the candidates candidates should ensure that they fill all the eligibility criteria
                                        laid down by the examination body. Students who fail to fulfill the criterion will be disqualified from the
                                        exam. Below we have provided in detail the eligibility criteria for both the courses.
                                        Students who are appearing for their final qualifying examination (U.G or P.G) are eligible subject to their
                                        U.G or P.G Result is declared and available to the University on or before Verification/Counselling date of
                                        B.Ed course.
                                    </p>
                                    <ul className='ml-10'>
                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Candidates belonging to the General category should have secured at least 50% marks in their graduation
                                            or post graduation examination. Candidates with even 49.99 percentile are not eligible to apply.</p>
                                            </li>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Candidates belonging to the reserved category (Other Backwards Class, Scheduled Caste and Scheduled
                                            Tribe) should have scored at least 45% Marks in their graduation or post graduation examination.
                                            Candidates with percentage of 44.99 are not eligible to apply.</p>
                                            </li>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Candidate should not have any criminal record against them.</p>
                                            </li>


                                            <li className='flex items-center'>
                                                <i style={{ color: '#0076BD' }} class="fa-solid fa-diamond text-2xl mr-3"></i>
                                                <p>Candidates who have been debarred by the University for any reasons will not be eligible.</p>
                                            </li>

                                        </ul>
                                </div>






                                <div className='mb-6'>
                                    <p className='mb-2 text-xl font-bold'>Kumaun University B.Ed 2021 Admit Card</p>
                                    <p className='mt-2 '>
                                        Students who have successfully submitted their duly filled application form before the last scheduled date can
                                        download their admit cards for the exam. It is available on the official website for the candidates to download.
                                        It is mandatory that the candidates carry their admit cards on the day of examination. Candidates without a
                                        valid admit card and a valid photo id proof will not be allowed to enter the examination centre.
                                    </p>
                                </div>


                                <div className='mb-6'>
                                    <p className='mb-2 text-xl font-bold'>Kumaun University B.Ed 2021 Exam Scheme</p>
                                    <p className='mt-2 '>
                                        The examination pattern of Kumaun University B.Ed Entrance Exam is based on the last year record. You
                                        can check it for the reference only as conducting body will release the latest one we will update here.
                                    </p>
                                </div>


                                <div className='mb-6'>
                                    <p className='mb-2 text-xl font-bold'>Kumaun University B.Ed 2021 Result</p>
                                    <p className='mt-2 '>
                                        Kumaun University (KU) will be released the result for B.Ed entrance examination. The candidates can check
                                        the result online at kuadmission.com or kunainital.ac.in. To check Kumaun University B.Ed 2021 result, the
                                        candidates need to enter their login credentials like application number and email address.
                                    </p>
                                </div>


                                <div className='mb-6'>
                                    <p className='mb-2 text-xl font-bold'>Kumaun University B.Ed 2021 Counselling</p>
                                    <p className='mt-2 '>
                                        Kumaun University will be released the counselling notice for B.Ed admission. To participate in the
                                        counselling process, candidates first have to pay the counselling fee, then upload the documents and fill the
                                        choice. After choice filling, merit list will publish on the basis of merit and weightage marks. Shortlisted
                                        candidates have to report the respective institute along with allotment letter.
                                    </p>
                                </div>


                                <div className='mb-6'>
                                    <p className='mb-2 text-xl font-bold'>Kumaun University, Nainital B.Ed Courses List and Fees Details:</p>

                                    <div class="overflow-x-auto ">
                                        <table class="table w-full">

                                            <thead>
                                                <tr className='hover'>
                                                    <th className='text-xl normal-case table-data'>Course Level</th>
                                                    <th className='text-xl normal-case table-data'>[B.Ed] Bachelor Of Education</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='hover'>
                                                    <th className='table-data'>Course Level</th>
                                                    <td className='table-data'>Graduation</td>
                                                </tr>
                                                <tr cla className='table-data'>
                                                    <th className='table-data'><span className='text-white'>Graduation</span></th>
                                                    <td className='table-data'></td>

                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'>Course Fees</th>
                                                    <td className='table-data'>State Quota - 42000.00</td>
                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'></th>
                                                    <td className='table-data'>Management Quota- 55000.00</td>
                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'></th>
                                                    <td className='table-data'>NRI Quota- 75000.00</td>
                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'>University Name</th>
                                                    <td className='table-data'><span className='underline'>Kumaun University</span></td>
                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'>Official Website</th>
                                                    <td className='table-data'><span className='underline'>https://www.kunainital.ac.in/</span></td>
                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'>Admission 2021-22</th>
                                                    <td className='table-data'><span className='underline'>Kumaun University Admission 2021</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <p>For detail information about Kumaun</p>
                                        <ul>
                                            <li>Download B.ED Information Brochure</li>
                                        </ul> */}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admission;