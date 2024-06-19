"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start text-muted-foreground">
          Based on{" "}
          <a className="text-foreground" href="https://siemba.works">
            Simba Mahlaulo&#39;s website
          </a>.{" "}
           Coded in{" "}
          <a className="text-foreground" href="https://code.visualstudio.com/">
            Visual Studio Code.
          </a>{" "}
          Built with{" "}
          React.
        </p>
      </div>
    </section>
  );
}
