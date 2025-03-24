  import React, { useState, useRef } from 'react';
  import { Camera } from 'lucide-react';

  const RatingSystem = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [rating, setRating] = useState(0);
    const [fullName, setFullName] = useState('');
    const [photos, setPhotos] = useState([]);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const fileInputRef = useRef(null);

    // Rating labels
    const ratingLabels = ['Bad(1/5)', 'So(2/5)', 'Ok(3/5)', 'Good(4/5)', 'Great(5/5)'];

    // Auto-generated reviews based on rating
    const autoReviews = {
      1: {
        headline: "Disappointed with the service",
        review: "The service fell short of my expectations. There were several issues that need to be addressed to improve the overall experience."
      },
      2: {
        headline: "Service needs improvement",
        review: "While there were some positive aspects, the service had several areas that could use significant improvement."
      },
      3: {
        headline: "Decent service overall",
        review: "The service was adequate and met basic expectations. There's room for improvement but it was generally acceptable."
      },
      4: {
        headline: "Good service with minor issues",
        review: "I had a positive experience with only minor concerns. The service was professional and mostly met my expectations."
      },
      5: {
        headline: "Excellent service experience",
        review: "I had an outstanding experience. The service exceeded my expectations in every way. Highly recommended!"
      }
    };

    const handleRatingSelect = (selectedRating) => {
      setRating(selectedRating);
      if (currentStep === 1) {
        setCurrentStep(2);
      }
    };

    const handleSubmitReview = () => {
      if (currentStep === 2) {
        setCurrentStep(3);
      } else {
        // Final submission logic would go here
        console.log("Submitting review with:", {
          rating,
          review: autoReviews[rating],
          fullName,
          photos,
          acceptTerms
        });
        alert("Review submitted successfully!");
        // Reset form
        resetForm();
      }
    };

    const resetForm = () => {
      setCurrentStep(1);
      setRating(0);
      setFullName('');
      setPhotos([]);
      setAcceptTerms(false);
    };

    const handleCancel = () => {
      resetForm();
    };

    const triggerFileInput = () => {
      fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
      const selectedFiles = Array.from(e.target.files);

      // Validate file size and type
      const validFiles = selectedFiles.filter(file => {
        const isValidType = ['image/jpeg', 'image/png', 'video/mp4'].includes(file.type);
        const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB max
        return isValidType && isValidSize;
      });

      // Maximum 3 files
      const newPhotos = [...photos, ...validFiles].slice(0, 3);
      setPhotos(newPhotos);

      // Reset the input value to allow selecting the same file again
      e.target.value = '';
    };

    const removePhoto = (index) => {
      setPhotos(photos.filter((_, i) => i !== index));
    };

    return (
      <div className="max-w-2xl mx-auto p-4">
        {/* Step 1: Initial Rating Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-md p-8 border border-blue-200">
            <h2 className="text-2xl font-semibold text-center mb-8">How would you rate our service?</h2>

            <div className="flex justify-center items-center space-x-4 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="flex flex-col items-center">
                  <button
                    onClick={() => handleRatingSelect(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <svg 
                      className={`w-12 h-12 ${star <= rating ? 'text-blue-500 fill-blue-500' : 'text-gray-100 stroke-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                  <span className="text-xs mt-2">{ratingLabels[star-1]}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Auto-Generated Review Display */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-md p-8 border border-blue-200">
            {/* Rating Display */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="flex flex-col items-center">
                  <button
                    onClick={() => handleRatingSelect(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <svg 
                      className={`w-8 h-8 ${star <= rating ? 'text-blue-500 fill-blue-500' : 'text-gray-300 stroke-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                  <span className="text-xs mt-1">{ratingLabels[star-1]}</span>
                </div>
              ))}
            </div>

            {/* Auto-Generated Review Display */}
            <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-2">{autoReviews[rating].headline}</h3>
              <p className="text-gray-700">{autoReviews[rating].review}</p>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={handleCancel} 
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmitReview} 
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: User Information Collection (Name and Photo only) */}
        {currentStep === 3 && (
          <div className="bg-white rounded-lg shadow-md p-8 border border-blue-200">
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/jpeg,image/png,video/mp4"
              className="hidden"
              multiple
            />

            {/* Photo Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6">
              <div className="flex flex-col items-center text-center">
                <Camera className="w-8 h-8 text-gray-400 mb-2" />
                <h3 className="text-lg font-medium mb-1">Add A Photo</h3>
                <p className="text-sm text-gray-500 mb-4">Add up to 3 images in JPG/PNG/MP4 (file size up to 5mb)</p>

                <button
                  onClick={triggerFileInput}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Select A File
                </button>

                {photos.length > 0 && (
                  <div className="mt-4 w-full">
                    <div className="text-green-600 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{photos.length} {photos.length === 1 ? 'file' : 'files'} uploaded</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {photos.map((file, index) => (
                        <div key={index} className="relative bg-gray-100 rounded-md p-1 w-24">
                          <div className="text-xs text-gray-700 truncate w-full text-center">
                            {file.name.substring(0, 15)}
                            {file.name.length > 15 ? '...' : ''}
                          </div>
                          <button 
                            onClick={() => removePhoto(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                          >
                            ×
                          </button>
                        </div>
                      ))}

                      {photos.length < 3 && (
                        <button 
                          onClick={triggerFileInput}
                          className="border border-gray-300 rounded-md w-24 h-24 flex items-center justify-center text-gray-500"
                        >
                          + Add more
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* User Name */}
            <div className="mb-6">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">I Accept The Terms And Conditions Of Submitting The Review</span>
              </label>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={handleCancel} 
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmitReview} 
                className={`px-6 py-2 rounded-md flex items-center ${
                  !fullName || photos.length === 0 || !acceptTerms 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                disabled={!fullName || photos.length === 0 || !acceptTerms}
              >
                Rate Product
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default RatingSystem;