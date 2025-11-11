"use client";

import { useState } from "react";
import { FileText, Download, ArrowLeft, Edit } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    // Client Details
    clientName: "",
    clientCompany: "",
    clientEmail: "",
    clientPhone: "",
    clientAddress: "",

    // Proposal Details
    proposalSubject: "",
    proposalDate: new Date().toISOString().split("T")[0],
    validUntil: "",

    // Project Details
    projectDescription: "",
    scope: "",
    deliverables: "",
    timeline: "",

    // Financial
    totalAmount: "",
    paymentTerms: "",

    // Additional
    specialNotes: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      // Simulate generation delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowPreview(true);
    } catch (error) {
      console.error("Error generating proposal:", error);
      alert("Error generating proposal");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    try {
      const element = document.getElementById("proposal-content");
      if (!element) return;

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        height: element.scrollHeight,
        width: element.scrollWidth,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = `${formData.clientCompany || "Client"}_Proposal_${
        new Date().toISOString().split("T")[0]
      }.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg">
            {/* Preview Header */}
            <div className="border-b p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-accent-500 mr-2" />
                  <h1 className="text-2xl font-bold text-primary-500">
                    Proposal Preview
                  </h1>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleEdit}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center bg-accent-500 text-white px-4 py-2 rounded-md hover:bg-accent-600 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Proposal Content */}
            <div
              id="proposal-content"
              className="p-8 bg-white"
              style={{ fontFamily: "serif" }}
            >
              {/* Letterhead */}
              <div className="text-center border-b-2 border-primary-500 pb-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/assets/logo-dark.svg"
                    alt="CN Engine Systems Logo"
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <h1 className="text-3xl font-bold text-primary-500 mb-1">
                      CN ENGINE SYSTEMS LTD
                    </h1>
                    <p className="text-gray-600 text-sm">
                      Engineering Excellence in Nigeria
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  RC: 1759862 | Email: projects@cnenginesystems.com | Phone:
                  +234 913 8802 2206
                </p>
                <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
              </div>

              {/* Date and Reference */}
              <div className="mb-8">
                <p className="text-right text-gray-600 mb-4">
                  Date:{" "}
                  {new Date(formData.proposalDate).toLocaleDateString("en-GB")}
                </p>
                <div className="mb-6">
                  <p className="font-semibold">{formData.clientName}</p>
                  <p>{formData.clientCompany}</p>
                  {formData.clientAddress && (
                    <p className="whitespace-pre-line">
                      {formData.clientAddress}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <p>
                  <strong>Subject: {formData.proposalSubject}</strong>
                </p>
              </div>

              {/* Greeting */}
              <div className="mb-6">
                <p>Dear {formData.clientName},</p>
              </div>

              {/* Introduction */}
              <div className="mb-6">
                <p>
                  Thank you for considering CN Engine Systems Ltd for your
                  engineering needs. We are pleased to submit this proposal for
                  your review.
                </p>
              </div>

              {/* Project Description */}
              {formData.projectDescription && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-500 mb-2">
                    PROJECT DESCRIPTION
                  </h3>
                  <p className="whitespace-pre-line">
                    {formData.projectDescription}
                  </p>
                </div>
              )}

              {/* Scope of Work */}
              {formData.scope && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-500 mb-2">
                    SCOPE OF WORK
                  </h3>
                  <p className="whitespace-pre-line">{formData.scope}</p>
                </div>
              )}

              {/* Deliverables */}
              {formData.deliverables && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-500 mb-2">
                    DELIVERABLES
                  </h3>
                  <p className="whitespace-pre-line">{formData.deliverables}</p>
                </div>
              )}

              {/* Timeline */}
              {formData.timeline && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-500 mb-2">
                    PROJECT TIMELINE
                  </h3>
                  <p>{formData.timeline}</p>
                </div>
              )}

              {/* Financial Details */}
              {(formData.totalAmount || formData.paymentTerms) && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-500 mb-2">
                    FINANCIAL DETAILS
                  </h3>
                  {formData.totalAmount && (
                    <p>
                      <strong>Total Investment:</strong> ₦{formData.totalAmount}
                    </p>
                  )}
                  {formData.paymentTerms && (
                    <p>
                      <strong>Payment Terms:</strong> {formData.paymentTerms}
                    </p>
                  )}
                </div>
              )}

              {/* Special Notes */}
              {formData.specialNotes && (
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-500 mb-2">
                    ADDITIONAL NOTES
                  </h3>
                  <p className="whitespace-pre-line">{formData.specialNotes}</p>
                </div>
              )}

              {/* Validity */}
              {formData.validUntil && (
                <div className="mb-6">
                  <p>
                    <strong>This proposal is valid until:</strong>{" "}
                    {new Date(formData.validUntil).toLocaleDateString("en-GB")}
                  </p>
                </div>
              )}

              {/* Closing */}
              <div className="mb-8">
                <p>
                  We look forward to the opportunity to work with you on this
                  project. Please feel free to contact us if you have any
                  questions or require additional information.
                </p>
              </div>

              {/* Signature */}
              <div>
                <p>Sincerely,</p>
                <br />
                <p>
                  <strong>CN Engine Systems Ltd</strong>
                </p>
                <p>Engineering Team</p>
                <p>projects@cnenginesystems.com</p>
                <p>+234 913 8802 2206</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-accent-500 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-primary-500">
                Proposal Generator
              </h1>
              <p className="text-gray-600">
                Generate professional letterhead proposals
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-primary-500 mb-4">
                Client Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    required
                    value={formData.clientName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="clientCompany"
                    required
                    value={formData.clientCompany}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="clientEmail"
                    required
                    value={formData.clientEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="clientPhone"
                    value={formData.clientPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Address
                  </label>
                  <textarea
                    name="clientAddress"
                    rows={2}
                    value={formData.clientAddress}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Proposal Details */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-primary-500 mb-4">
                Proposal Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proposal Subject *
                  </label>
                  <input
                    type="text"
                    name="proposalSubject"
                    required
                    value={formData.proposalSubject}
                    onChange={handleChange}
                    placeholder="e.g., Engineering Services for Manufacturing Plant"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proposal Date *
                  </label>
                  <input
                    type="date"
                    name="proposalDate"
                    required
                    value={formData.proposalDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valid Until
                  </label>
                  <input
                    type="date"
                    name="validUntil"
                    value={formData.validUntil}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-primary-500 mb-4">
                Project Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    required
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Scope of Work
                  </label>
                  <textarea
                    name="scope"
                    rows={4}
                    value={formData.scope}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deliverables
                  </label>
                  <textarea
                    name="deliverables"
                    rows={3}
                    value={formData.deliverables}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g., 8-12 weeks"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-primary-500 mb-4">
                Financial Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Amount (₦)
                  </label>
                  <input
                    type="text"
                    name="totalAmount"
                    value={formData.totalAmount}
                    onChange={handleChange}
                    placeholder="e.g., 5,000,000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Terms
                  </label>
                  <input
                    type="text"
                    name="paymentTerms"
                    value={formData.paymentTerms}
                    onChange={handleChange}
                    placeholder="e.g., 30% advance, 70% on completion"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h2 className="text-xl font-semibold text-primary-500 mb-4">
                Additional Information
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Notes
                </label>
                <textarea
                  name="specialNotes"
                  rows={3}
                  value={formData.specialNotes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-accent-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isGenerating}
                className="flex items-center bg-accent-500 text-white px-6 py-3 rounded-md hover:bg-accent-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>Generating...</>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Preview Proposal
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
