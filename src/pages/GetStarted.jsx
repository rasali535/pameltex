import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});

    const handleOptionSelect = (key, value) => {
        setAnswers({ ...answers, [key]: value });
        nextStep();
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const totalSteps = 8;
    const progress = (step / totalSteps) * 100;

    return (
        <div className="gs-page">
            <div className="gs-container">
                {/* Progress Bar */}
                <div className="gs-progress-wrapper">
                    <div className="gs-progress-bg">
                        <div
                            className="gs-progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="gs-card">

                    {/* Step 1: Therapy Type */}
                    {step === 1 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">What type of therapy are you looking for?</h2>
                            <div className="gs-options">
                                <button onClick={() => handleOptionSelect('type', 'Individual')} className="gs-btn">
                                    <span className="gs-btn-text">Individual</span>
                                    <span className="gs-btn-sub">(for myself)</span>
                                </button>
                                <button onClick={() => handleOptionSelect('type', 'Couples')} className="gs-btn">
                                    <span className="gs-btn-text">Couples</span>
                                    <span className="gs-btn-sub">(for myself and my partner)</span>
                                </button>
                                <button onClick={() => handleOptionSelect('type', 'Teen')} className="gs-btn">
                                    <span className="gs-btn-text">Teen</span>
                                    <span className="gs-btn-sub">(for my child)</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Country */}
                    {step === 2 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">Which country are you in?</h2>
                            <div className="gs-input-group">
                                <select
                                    className="gs-select"
                                    onChange={(e) => handleOptionSelect('country', e.target.value)}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select a country</option>
                                    {/* African Countries */}
                                    <option value="Botswana">Botswana</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    {/* North America */}
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Mexico">Mexico</option>
                                    {/* Europe */}
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Ireland">Ireland</option>
                                    {/* Asia Pacific */}
                                    <option value="Australia">Australia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="India">India</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    {/* Other */}
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Gender */}
                    {step === 3 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">What is your gender identity?</h2>
                            <div className="gs-options">
                                {['Woman', 'Man', 'Non-binary', 'Transgender', 'Intersex', 'I prefer not to say'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect('gender', option)}
                                        className="gs-btn-simple"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Age */}
                    {step === 4 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">How old are you?</h2>
                            <select
                                className="gs-select"
                                onChange={(e) => handleOptionSelect('age', e.target.value)}
                                defaultValue=""
                            >
                                <option value="" disabled>Select your age</option>
                                {[...Array(83).keys()].map(i => i + 18).map(age => (
                                    <option key={age} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Step 5: Sexual Orientation */}
                    {step === 5 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">How do you identify?</h2>
                            <div className="gs-options">
                                {['Straight', 'Gay', 'Lesbian', 'Bi or Pan', 'Asexual', 'I prefer not to say'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect('orientation', option)}
                                        className="gs-btn-simple"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 6: Relationship Status */}
                    {step === 6 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">What is your relationship status?</h2>
                            <div className="gs-options">
                                {['Single', 'In a relationship', 'Married', 'Divorced', 'Widowed', 'Separated'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect('relationship', option)}
                                        className="gs-btn-simple"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 7: Religion Importance */}
                    {step === 7 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">How important is religion in your life?</h2>
                            <div className="gs-options">
                                {['Very important', 'Important', 'Somewhat important', 'Not important at all'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect('religion_importance', option)}
                                        className="gs-btn-simple"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 8: Religion Identity */}
                    {step === 8 && (
                        <div className="gs-step animate-fade-in">
                            <h2 className="gs-title">Which religion do you identify with?</h2>
                            <div className="gs-options">
                                {['Christianity', 'Islam', 'Judaism', 'Hinduism', 'Buddhism', 'Other', 'I prefer not to say'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            const finalAnswers = { ...answers, religion: option };
                                            console.log('Final Answers:', finalAnswers);
                                            alert('Thank you! We will match you with a therapist shortly.');
                                            navigate('/');
                                        }}
                                        className="gs-btn-simple"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                {step > 1 && (
                    <div className="gs-footer">
                        <button onClick={prevStep} className="gs-back-btn">
                            Back to previous question
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetStarted;
