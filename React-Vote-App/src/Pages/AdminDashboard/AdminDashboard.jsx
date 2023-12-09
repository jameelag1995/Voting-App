import { useContext, useState,useEffect} from "react";
import "./AdminDashboard.css";
import { CANDIDATES } from "../../data/Data.js";
import { LoginContext } from "../../Context/LoginContext";


export default function AdminDashboard() {
    const { usersData } = useContext(LoginContext);
    const [candidates, setCandidates] = useState(CANDIDATES);

    useEffect(() => {
        const resetedCandidates = candidates.map((cand) => {
            return { ...cand, votes: 0 };
        });
        usersData.forEach((usr) => {
            let { voted, votedTo } = usr.vote;
            if (voted) {
                resetedCandidates.find(
                    (cand) => cand.name === votedTo && cand.votes++
                );
            }
        });

        setCandidates([...resetedCandidates]);
    }, []);

    return (
        <div className="AdminDashboard page">
            <div className="users-votes-container">
                <ul>
                    {usersData.map((usr, index) => {
                        return (
                            <li key={index}>
                                <span id="user-name">{usr.name} </span>
                                <span
                                    id="user-voted"
                                    className={
                                        usr.vote.voted ? "voted" : "notvoted"
                                    }
                                >
                                    {usr.vote.voted ? "Voted" : "Didn't Vote"}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="votes-chart">
                
            </div>
        </div>
    );
}
