const { useState } = React;

const App = () => {
    const [palette, setPalette] = useState(generatePalette());
    const [savedPalettes, setSavedPalettes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    function generatePalette() {
        return Array.from({ length: 5 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }

    function savePalette() {
        setSavedPalettes([...savedPalettes, palette]);
    }

    return (
        <div className="container">
            <h1>
                <i className="fas fa-palette"></i> Color Palette Generator
            </h1>
            <div className="palette">
                {palette.map((color, index) => (
                    <div
                        key={index}
                        className="color-box"
                        style={{ backgroundColor: color }}
                        title={color}
                    ></div>
                ))}
            </div>
            <button onClick={() => setPalette(generatePalette())}>
                <i className="fas fa-random"></i> Generate Palette
            </button>
            <button onClick={savePalette}>
                <i className="fas fa-save"></i> Save Palette
            </button>
            <button onClick={() => setShowModal(true)}>
                <i className="fas fa-eye"></i> View Saved Palettes
            </button>

            {showModal && (
                <div className="modal open">
                    <div className="modal-header">
                        <h2>Saved Palettes</h2>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                    <div className="saved-palettes">
                        {savedPalettes.length === 0 ? (
                            <p>No palettes saved yet!</p>
                        ) : (
                            savedPalettes.map((palette, index) => (
                                <div key={index} className="palette">
                                    {palette.map((color, idx) => (
                                        <div
                                            key={idx}
                                            className="color-box"
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        ></div>
                                    ))}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
