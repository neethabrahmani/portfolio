export const projectsData = [
    {
        id: 1,
        name: 'FreshNCook | End-to-End Food Spoilage Detection',
        description: 'Engineered a high-performance Convolutional Neural Network (CNN) architecture using TensorFlow and Keras to automate real-time food quality assessment with Computer Vision. Implemented an optimized Data Pipeline utilizing OpenCV for 128x128 RGB image pre-processing, normalization, and Data Augmentation. Refined hyperparameters including Adam Optimizer and Categorical Cross-Entropy, while applying Dropout Regularization and Batch Normalization. Executed Model Quantization to TensorFlow.js for low-latency client-side inference.',
        tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'TensorFlow.js', 'Jupyter', 'Git'],
        role: 'AI / Computer Vision Engineer',
        code: '',
        demo: '',
    },
    {
    id: 2,
    name: 'Stock Market Forecasting Using Probability and Statistical Modeling',
    description: 'Developed a stock market forecasting and risk analysis system using Probability Theory, Regression Analysis, and Monte Carlo Simulation techniques. Analyzed five years of historical stock data to study return distributions, volatility patterns, and stock price movement probabilities. Implemented Geometric Brownian Motion (GBM) models to simulate future stock price paths and estimate risk metrics such as Value at Risk (VaR). Built predictive regression models using indicators like moving averages, trading volume changes, and daily price ranges, achieving R-squared values between 0.68 and 0.89 for improved market forecasting and risk assessment.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter Notebook', 'Monte Carlo Simulation', 'Statistical Modeling'],
    role: 'Data Analyst / Statistical Modeling Researcher',
    code: '',
    demo: '',
    },

    {
    id: 3,
    name: 'Fashion Trend Prediction using NLP and Sentiment Analysis on Social Media Data',
    
    description: 'Developed an AI-driven fashion trend prediction system using Natural Language Processing (NLP), Sentiment Analysis, and Deep Learning techniques to analyze consumer preferences and emerging fashion trends from social media data, fashion blogs, and customer reviews. Implemented text preprocessing, TF-IDF feature extraction, and word embeddings for semantic analysis. Utilized BERT for sentiment analysis and LSTM networks with attention mechanisms to identify temporal fashion trends and consumer behavior patterns. Evaluated model performance using Accuracy and F1-Score metrics for data-driven fashion trend forecasting and retail analytics.',

    tools: ['Python', 'NLP', 'BERT', 'LSTM', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'TF-IDF', 'Jupyter Notebook'],

    role: 'NLP / Deep Learning Researcher',

    code: '',
    demo: '',
    },
   
    {
    id: 4,
    name: 'Automated Disease Detection from X-ray Images Using Digital Image Processing Techniques',

    description: 'Developed an automated disease detection system for X-ray images using Digital Image Processing (DIP) techniques to assist radiologists in identifying medical conditions such as pneumonia, tuberculosis, and fractures. Implemented adaptive preprocessing methods including Histogram Equalization and Gaussian Blur filtering to enhance image contrast, reduce noise, and improve visibility of subtle anomalies in X-ray scans. Designed a hybrid segmentation pipeline integrating thresholding, morphological operations, and contour detection techniques to accurately isolate disease-affected regions from medical images. Extracted important image features such as texture, shape, and intensity patterns for automated disease analysis and detection. The proposed system improved detection accuracy, reduced false positives, and provided more consistent analysis compared to traditional image processing approaches. The project demonstrates the application of Digital Image Processing in medical imaging for scalable, efficient, and reliable automated healthcare diagnostics.',

    tools: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'Digital Image Processing', 'Image Segmentation', 'Histogram Equalization', 'Gaussian Blur'],

    role: 'Computer Vision / Digital Image Processing Researcher',

    code: '',
    demo: '',
    },

    {
    id: 5,
    name: 'University Vehicle Pooling System',
    description: 'Developed a smart university vehicle pooling system to improve commuting efficiency, safety, and sustainability through an AI-driven ride-sharing platform. Implemented intelligent rider matching based on routes, schedules, and ride preferences, along with features such as peak-hour pooling optimization, ride completion tracking, and subscription-based pooling passes. Enhanced rider safety with women-only pooling, verified women drivers, live tracking, SOS alerts, and route deviation detection. Integrated helmet tracking and carbon footprint monitoring to promote safety compliance and eco-friendly transportation. Designed a reliability scoring system and admin dashboard for monitoring ride performance, user trust scores, and environmental impact analytics.',
    tools: ['Python', 'AI Matching Algorithms', 'Database Management', 'Real-time Tracking', 'Data Analytics', 'Web Development', 'Cloud Integration'],
    role: 'Full Stack / Smart Mobility System Developer',
    code: '',
    demo: '',
    },
];
