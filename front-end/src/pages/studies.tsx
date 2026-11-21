
import { useState } from "react";

interface PatientStudy {
    name: string;
    age: number;
    study: string;
    date: string;
    status: string;
    id: string;
}

const Studies = () => {
    const [search, setSearch] = useState<string>("");
    const [results, setResults] = useState<PatientStudy | null>(null);

    const patient: PatientStudy = {
        name: "John Doe",
        age: 18,
        study: "CT Head",
        date: "21 Nov 2026",
        status: "Completed",
        id: "PT-001"
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (search.trim().toLowerCase() === patient.name.toLowerCase()) {
            setResults(patient);
        } else {
            setResults(null);
        }
    };

    return (
        <div className="studies-page">

            <div className="studies-header">
                <div>
                    <h1>Medical Studies</h1>
                    <p>Search and manage patient medical studies.</p>
                </div>

                <div className="studies-count">
                    <span>Total Studies</span>
                    <h2>00</h2>
                </div>
            </div>

            <div className="studies-search-card">
                <div className="search-heading">
                    <h2>Find Patient Studies</h2>
                    <p>Enter the patient's name to view their study records.</p>
                </div>

                <form onSubmit={handleSubmit} className="studies-search-form">
                    <input
                        type="text"
                        placeholder="Search patient by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">Search Patient</button>
                </form>
            </div>

            <div className="studies-results">
                <div className="results-header">
                    <h2>Study Records</h2>
                    <span>Patient Information</span>
                </div>

                {results ? (
                    <div className="patient-study-card">
                        <div className="patient-study-top">
                            <div className="study-avatar">
                                {results.name.charAt(0)}
                            </div>

                            <div>
                                <h3>{results.name}</h3>
                                <p>{results.id}</p>
                            </div>

                            <span className="study-status">
                                {results.status}
                            </span>
                        </div>

                        <div className="study-details">
                            <div>
                                <span>Age</span>
                                <h4>{results.age} Years</h4>
                            </div>

                            <div>
                                <span>Study Type</span>
                                <h4>{results.study}</h4>
                            </div>

                            <div>
                                <span>Study Date</span>
                                <h4>{results.date}</h4>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="empty-studies">
                        <div className="empty-icon">⌕</div>
                        <h3>No Studies to Display</h3>
                        <p>
                            Search for a patient to view their medical study records.
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
};


export default Studies;
