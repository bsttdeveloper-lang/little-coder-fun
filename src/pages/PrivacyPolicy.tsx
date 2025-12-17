import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="container max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>

          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Privacy Policy for Fun Math Practice
            </h1>

            <p className="text-muted-foreground mb-6">
              Fun Math Practice does not collect, store, or share any personal information.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                No personal data is collected
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                No analytics are used
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                No advertising is shown
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                No data is shared with third parties
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-primary">•</span>
                The app works fully offline
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              This app is designed for children and complies with Apple's App Store Kids category guidelines.
            </p>

            <div className="border-t border-border pt-6">
              <p className="text-foreground mb-2">
                If you have any questions, please contact:
              </p>
              <p className="text-primary font-medium">
                Email: benistt@icloud.com
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Last updated: December 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
