import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Model analysis
export const analyzeSequence = async (sequence, model) => {
  const response = await api.post('/api/models/fill-missing', { sequence, model });
  return response.data;
};

// ✅ Batch file analysis (if implemented later)
export const batchAnalyze = async (formData) => {
  const response = await api.post('/api/batch/analyze', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

// ✅ Model comparison (optional)
export const compareModels = async (sequence) => {
  const response = await api.post('/api/analyze/compare', { sequence });
  return response.data;
};

// ✅ Get previous analysis history (optional)
export const getAnalysisHistory = async () => {
  const response = await api.get('/api/analyze/history');
  return response.data;
};

// ✅ Fetch info for a specific model
export const getModelInfo = async (modelName) => {
  const response = await api.get(`/api/models/${modelName}`);
  return response.data;
};

// ✅ Backend Connection Test
export const checkConnection = async () => {
  const response = await api.get('/api/test');
  return response.data;
};

export default api;
