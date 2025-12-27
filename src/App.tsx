import './App.css'
import {useEffect, useState} from "react";
import chucklogo from './assets/chucknorrislogo.jpg';

interface ChuckNorrisJoke {
    icon_url: string;
    id: string;
    url: string;
    value: string;
}

function App() {
    const [joke, setJoke] = useState<string>('Loading a joke...');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    // new state for visual feedback while copying
    const [copied, setCopied] = useState<boolean>(false);

    const fetchJoke = async () => {
        setLoading(true);
        setError(false);
        setCopied(false); // resetting copy state when a new joke arrives
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: ChuckNorrisJoke = await response.json();
            setJoke(data.value);
        } catch (err) {
            console.error(err);
            setError(true);
            setJoke('Chuck Norris broke the Internet. Try again.');
        } finally {
            setLoading(false);
        }
    };

    // function who copies in clipboard
    const copyToClipboard = async () => {
        try {
            // browser native function
            await navigator.clipboard.writeText(joke);

            // activating visual feedback
            setCopied(true);

            // resetting the button to the initial state after 2 seconds
            setTimeout(() => { setCopied(false); }, 2000);
        } catch (err) {
            console.error('Error while copying:', err);
        }
    };

    useEffect(() => {
        void fetchJoke();
    }, []);

    return (
        <div className="container">
            <div className="card">
                <img
                    src={chucklogo}
                    alt="Chuck Norris Logo"
                    className="logo"
                />

                <div className="content-area">
                    {error ? (
                        <p className="error-text">{joke}</p>
                    ) : (
                        <p className="joke-text">
                            {loading ? "Searching in the secret archive..." : `"${joke}"`}
                        </p>
                    )}
                </div>

                <div className="button-group">
                    <button
                        onClick={fetchJoke}
                        disabled={loading}
                        className="primary-btn"
                    >
                        {loading ? 'Please wait...' : 'Next joke'}
                    </button>

                    <button
                        onClick={copyToClipboard}
                        disabled={loading || error}
                        className={`secondary-btn ${copied ? 'copied' : ''}`}
                    >
                        {copied ? 'Copied! ✅' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
