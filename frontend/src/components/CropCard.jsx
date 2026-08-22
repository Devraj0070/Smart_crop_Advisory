function CropCard() {
  return (
    <div className="card crop-card">
      <h3>🌾 Recommended Crop</h3>

      <h2>Rice</h2>

      <p>Suitability</p>

      <div className="progress">
        <div className="progress-fill"></div>
      </div>

      <strong>92%</strong>

      <p>Suitable based on your soil and weather conditions.</p>
    </div>
  );
}

export default CropCard;