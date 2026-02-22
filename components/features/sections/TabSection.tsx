import React, { useState, useEffect, memo } from "react";

// Parent Component
const TabContainer = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [parentPayload, setParentPayload] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Parent API call on mount
  useEffect(() => {
    const fetchParentData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_start=0&_limit=5",
        );
        const data = await response.json();
        setParentPayload({ userId: data[0]?.id, name: data[0].username });
      } catch (error) {
        console.error("Error fetching parent data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchParentData();
  }, []);

  if (loading) {
    return <div>Loading parent data...</div>;
  }

  return (
    <div className="tab-container pb-40 ps-10">
      {/* Tab Navigation */}
      <div className="tab-nav flex gap-4 pb-3 ">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </button>
        <button
          className={activeTab === "tab3" ? "active" : ""}
          onClick={() => setActiveTab("tab3")}
        >
          Tab 3
        </button>
      </div>

      {/* Tab Content - Only renders active component */}
      <div className="tab-content border p-5">
        <div style={{ display: activeTab === "tab1" ? "block" : "none" }}>
          <Tab1Component payload={parentPayload} />
        </div>
        <div style={{ display: activeTab === "tab2" ? "block" : "none" }}>
          <Tab2Component payload={parentPayload} />
        </div>
        <div style={{ display: activeTab === "tab3" ? "block" : "none" }}>
          <Tab3Component payload={parentPayload} />
        </div>
        {/* {activeTab === "tab1" && <Tab1Component payload={parentPayload} />}
        {activeTab === "tab2" && <Tab2Component payload={parentPayload} />}
        {activeTab === "tab3" && <Tab3Component payload={parentPayload} />} */}
      </div>
    </div>
  );
};

interface props {
  payload: any;
}

// Tab 1 Component - Memoized to prevent unnecessary re-renders
const Tab1Component: React.FC<props> = memo(({ payload }) => {
  const [data, setData] = useState<any>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchTab1Data = async () => {
      try {
        // setData((prev: any) => ({ ...prev, loading: true }));
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5",
        );
        const result = await response.json();
        setData((prev: any) => ({ ...prev, data: result, loading: false }));
      } catch (error) {
        console.error("Error fetching tab1 data:", error);
        setData((prev: any) => ({ ...prev, loading: false, error }));
      }
    };

    fetchTab1Data();
  }, [payload.userId]);

  // console.log("child1");

  if (data.loading) return <div>Loading Tab 1 data...</div>;

  return (
    <div>
      <h2 className="font-bold border-b inline-block mb-3">Tab 1 Content</h2>
      {data?.data?.map((d: any) => (
        <pre key={d.id}>{d.title}</pre>
      ))}
    </div>
  );
});

// Tab 2 Component - Memoized to prevent unnecessary re-renders
const Tab2Component: React.FC<props> = memo(({ payload }) => {
  //   const [data, setData] = useState<any>(null);
  //   const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchTab2Data = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5",
        );
        const result = await response.json();
        setData((prev: any) => ({ ...prev, data: result, loading: false }));
      } catch (error) {
        console.error("Error fetching tab2 data:", error);
        setData((prev: any) => ({ ...prev, loading: false, error }));
      }
    };

    fetchTab2Data();
  }, [payload.userId]);

  // console.log("child2", data);

  if (data.loading) return <div>Loading Tab 2 data...</div>;

  return (
    <div>
      <h2 className="font-bold border-b inline-block mb-3">Tab 2 Content</h2>
      {data?.data?.map((d: any) => (
        <pre key={d.id}>{d.title}</pre>
      ))}
    </div>
  );
});

// Tab 3 Component - Memoized to prevent unnecessary re-renders
const Tab3Component: React.FC<props> = memo(({ payload }) => {
  const [data, setData] = useState<any>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchTab3Data = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5",
        );
        const result = await response.json();
        setData((prev: any) => ({ ...prev, data: result, loading: false }));
      } catch (error) {
        console.error("Error fetching tab3 data:", error);
        setData((prev: any) => ({ ...prev, loading: false, error }));
      }
    };

    fetchTab3Data();
  }, [payload.userId]);

  // console.log("child3", data);

  if (data.loading) return <div>Loading Tab 3 data...</div>;

  return (
    <div>
      <h2 className="font-bold border-b inline-block mb-3">Tab 3 Content</h2>
      {data?.data?.map((d: any) => (
        <pre key={d.id}>{d.name}</pre>
      ))}
    </div>
  );
});

// Add display names for debugging
Tab1Component.displayName = "Tab1Component";
Tab2Component.displayName = "Tab2Component";
Tab3Component.displayName = "Tab3Component";

export default TabContainer;
