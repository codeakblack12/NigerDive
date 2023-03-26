const DIVE_CONTROL = [
    // COMMUNICATIONS
    {
        name: "Comms Testing D 018, Sheet 6",
        description: "Comms Testing D 018, Sheet 6",
        requirement: "All communications links must have been examined and function tested in the last 6 months, in addition to any standard pre-dive checks",
        url: "",
        subfolder: "Communications",
        duration: 6
    },
    // MONITORING
    {
        name: "Analyser Testing D 018, Sheet 2",
        description: "Analyser Testing D 018, Sheet 2",
        requirement: "Analysers should be examined, function tested and calibrated in situ within the last 6 months",
        url: "",
        subfolder: "Monitoring",
        duration: 6
    },
    // GAUGES
    {
        name: "Gauges Calibration D 018, Sheet 18, 19 & 20",
        description: "Gauges Calibration D 018, Sheet 18, 19 & 20",
        requirement: "All gauges must have been visually examined, function tested in situ, calibrated and/or tested (as relevant) to the required accuracy in the last 6 months",
        url: "",
        subfolder: "Gauges",
        duration: 6
    },
    // Pipework and Valves
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Internal pressure test of all valves, pipework, fittings, etc. to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Pipework and Valves",
        duration: Infinity
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Pipework and Valves",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Valves and pipework need to have been visually examined in last 6 months",
        url: "",
        subfolder: "Pipework and Valves",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Valves and pipework need to have had a gas leak test to maximum working pressure in last 2 years",
        url: "",
        subfolder: "Pipework and Valves",
        duration: 24
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Pipework and Valves",
        duration: 30
    },
    // ELECTRICS
    {
        name: "Testing D 018, Sheet 11",
        description: "Testing D 018, Sheet 11",
        requirement: "All electrical equipment should have been visually examined and function tested in the last 6 months. Cables should have continuity and resistance tests",
        url: "",
        subfolder: "Electrics",
        duration: 6
    },
    // FIREFIGHTING
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "Whether fixed or portable it should be in accordance with manufacturer's specification and fit for the purpose it will be used for",
        url: "",
        subfolder: "Firefighting",
        duration: Infinity
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If it is a portable system then it must have had an external visual examination and check that any indicating device reads within the acceptable range within the last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system then the nozzles, valves, pipework, etc. must have been visually examined in the last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system it must be function tested to demonstrate operation of the system OR had a simulated test using air or gas as the test medium in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If an automatic detection/activation system is fitted then a function test to demonstrate correct operation must have been carried out in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    // BREATHING APPARATUS
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "Visual examination and function test (including communications) in last 6 months. Check made at same time that cylinder is fully charged",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 6
    },
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "External visual examination of cylinder plus gas leak test to maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 30
    },
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "Internal and external visual examination of cylinder plus gas leak test to maximum working pressure in last 5 years (possible overpressure test)",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 60
    },

]

const TWINLOCK_AIR_CHAMBER = [
    // GENERAL
    {
        name: "Comms Testing D 018, Sheet 6",
        description: "Comms Testing D 018, Sheet 6",
        requirement: "Communications (if fitted) must be examined and function tested in last 6 months",
        url: "",
        subfolder: "General",
        duration: 6
    },
    // PRESSURE VESSEL
    {
        name: "Chamber Testing D 018, Sheet 25.1",
        description: "Chamber Testing D 018, Sheet 25.1",
        requirement: "Visual examination within last 6 months",
        url: "",
        subfolder: "Pressure Vessel",
        duration: 6
    },
    {
        name: "Chamber Testing D 018, Sheet 25.1",
        description: "Chamber Testing D 018, Sheet 25.1",
        requirement: "Thorough internal and external visual inspection plus a gas leak test at full working pressure in last 2½ years",
        url: "",
        subfolder: "Pressure Vessel",
        duration: 6
    },
    {
        name: "Chamber Testing D 018, Sheet 25.1",
        description: "Chamber Testing D 018, Sheet 25.1",
        requirement: "Internal overpressure test within the last 5 years (or other testing as agreed by an international classification society) plus a gas leak test at full working pressure",
        url: "",
        subfolder: "Pressure Vessel",
        duration: 6
    },
    // VIEWPORTS
    {
        name: "Viewport Testing",
        description: "Viewport Testing",
        requirement: "Manufactured in accordance with recognised standard and fit for purpose. Further information in IMCA D 047",
        url: "",
        subfolder: "Viewports",
        duration: Infinity
    },
    {
        name: "Viewport Testing",
        description: "Viewport Testing",
        requirement: "Overpressure tested to 1.25 times maximum rated working pressure when new or other testing to establish structural integrity as required by the ASME PVHO standard",
        url: "",
        subfolder: "Viewports",
        duration: Infinity
    },
    {
        name: "Viewport Testing",
        description: "Viewport Testing",
        requirement: "Visual examination in situ in last 6 months",
        url: "",
        subfolder: "Viewports",
        duration: 6
    },
    {
        name: "Viewport Testing",
        description: "Viewport Testing",
        requirement: "Gas leak test as an integral part of the chamber they are fitted to in the last 2½ years",
        url: "",
        subfolder: "Viewports",
        duration: 30
    },
    {
        name: "Viewport Testing",
        description: "Viewport Testing",
        requirement: "Internal overpressure test as an integral part of the chamber they are fitted to in the last 5 years (or other testing to establish structural integrity as required by the competent person)",
        url: "",
        subfolder: "Viewports",
        duration: 60
    },
    // FIREFIGHTING
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "Whether fixed or portable it should be in accordance with manufacturer's specification and fit for the purpose it will be used for",
        url: "",
        subfolder: "Firefighting",
        duration: Infinity
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If it is a portable system then it must have had an external visual examination and check that any indicating device reads within the acceptable range within last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system then the nozzles, valves, pipework, etc. must have been visually examined in the last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system it must be function tested to demonstrate operation of the system OR had a simulated test using air or gas as the test medium in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If an automatic detection/activation system is fitted then a function test to demonstrate correct operation must have been carried out in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    // CHAMBER  EXTERNAL
    {
        name: "Electrical Penetrators",
        description: "Electrical Penetrators",
        requirement: "All electric penetrators must be certified by a competent person (IMCA D 018 category 3 or 4) as fit for purpose",
        url: "",
        subfolder: "Chamber External",
        duration: Infinity
    },
    {
        name: "Medical Lock  Pipework Testing D 018, Sheet 24.1, 34",
        description: "Medical Lock  Pipework Testing D 018, Sheet 24.1, 34",
        requirement: "Internal pressure test of all valves, pipework, fittings etc. to 1.5 times maximum working pressure when new",
        url: "",
       subfolder: "Chamber External",
        duration: Infinity
    },
    {
        name: "Medical Lock  Pipework Testing D 018, Sheet 24.1, 34",
        description: "Medical Lock  Pipework Testing D 018, Sheet 24.1, 34",
        requirement: "Examination and function test in last 6 months",
        url: "",
       subfolder: "Chamber External",
        duration: 6
    },
    {
        name: "Medical Lock  Pipework Testing D 018, Sheet 24.1, 34",
        description: "Medical Lock  Pipework Testing D 018, Sheet 24.1, 34",
        requirement: "Gas leak test at maximum working pressure of the system in last 2 years",
        url: "",
       subfolder: "Chamber External",
        duration: 24
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination within last 6 months",
        url: "",
        subfolder: "Chamber External",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting. Refit to chamber and gas leak test to chamber maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Chamber External",
        duration: 30
    },
    {
        name: "Electrical Testing D 018, Sheet 11",
        description: "Electrical Testing D 018, Sheet 11",
        requirement: "Visual examination, function test plus continuity and resistance tests of all cables and electrical equipment within last 6 months",
        url: "",
       subfolder: "Chamber External",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        requirement: "Internal pressure test of all valves, pipework, fittings, etc. to 1.5 times maximum working pressure when new",
        url: "",
       subfolder: "Chamber External",
        duration: Infinity
    },
    {
        name: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        requirement: "Visual examination within the last 6 months",
        url: "",
       subfolder: "Chamber External",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        requirement: "Gas leak test at maximum working pressure in the last 2 years",
        url: "",
       subfolder: "Chamber External",
        duration: 24
    },
    // CHAMBER INTERNAL
    {
        name: "Comms Testing D 018, Sheet 6",
        description: "Comms Testing D 018, Sheet 6",
        requirement: "Examination and function test in last 6 months",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    {
        name: "BIBS Testing D 018, Sheet 5.2",
        description: "BIBS Testing D 018, Sheet 5.2",
        requirement: "Visual examination and function test in last 6 months",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    {
        name: "Toilet Testing D 018, Sheet 27",
        description: "Toilet Testing D 018, Sheet 27",
        requirement: "If a flush type sanitary system is fitted, it should have been examined and function tested in the last 6 months",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 16",
        description: "Firefighting Testing D 018, Sheet 16",
        requirement: "External examination of portable firefighting systems plus check that any indicating device is reading within the acceptable range in last 6 months",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    {
        name: "Gauge Calibration D 018, Sheet 19",
        description: "Gauge Calibration D 018, Sheet 19",
        requirement: "All gauges must have been visually examined and checked against a certified test instrument to the required accuracy in the last 6 months ",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    {
        name: "Scrubber Testing D 018, Sheet 34",
        description: "Scrubber Testing D 018, Sheet 34",
        requirement: "Any scrubber should be visually examined and function tested in the last 6 months",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        requirement: "Internal pressure test of all valves, pipework, fittings, etc. to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Chamber Internal",
        duration: Infinity
    },
    {
        name: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        requirement: "Visual examination within the last 6 months",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheets 24.1 & 24.2",
        requirement: "Gas leak test at maximum working pressure in last 2 years",
        url: "",
        subfolder: "Chamber Internal",
        duration: 24
    },
    {
        name: "Electrical Testing D 018, Sheet 11",
        description: "Electrical Testing D 018, Sheet 11",
        requirement: "Visual examination, function test plus continuity and resistance tests of all cables and electrical equipment within last 6 months",
        url: "",
        subfolder: "Chamber Internal",
        duration: 6
    },
    // CONTROL PANEL
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Internal pressure test of all valves, pipework, fittings, etc. to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Control Panel",
        duration: Infinity
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Valves and pipework need visually examined in last 6 months ",
        url: "",
        subfolder: "Control Panel",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Valves and pipework need a gas leak test to maximum working pressure in last 2 years",
        url: "",
        subfolder: "Control Panel",
        duration: 24
    },
    {
        name: "Gauge Calibration D 018, Sheet 18 & 19",
        description: "Gauge Calibration D 018, Sheet 18 & 19",
        requirement: "All gauges must have been visually examined, function tested in situ, calibrated and/or tested (as relevant) to the required accuracy in the last 6 months",
        url: "",
        subfolder: "Control Panel",
        duration: 6
    },
    {
        name: "Analyser Testing D 018, Sheet 1 & 2",
        description: "Analyser Testing D 018, Sheet 1 & 2",
        requirement: "Suitable analysers should have been calibrated in situ in the last 6 months. The pump for disposable tube types should be tested in the last 6 months",
        url: "",
        subfolder: "Control Panel",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Control Panel",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Control Panel",
        duration: 30
    },
    // BREATHING APPARATUS
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "Visual examination and function test (including communications) in last 6 months. Check made at same time that cylinder is fully charged",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 6
    },
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "External visual examination of cylinder plus gas leak test to maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 30
    },
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "Internal and external visual examination of cylinder plus gas leak test to maximum working pressure in last 5 years (possible overpressure test)",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 60
    },
]

const DIVER_LAUNCH_AND_RECOVERY = [
    // General
    {
        name: "Testing",
        description: "Testing",
        requirement: "A full company approved load test procedure should be provided for the system identifying all components included in the testing such as, but not limited to, A frame; sheaves; wire rope terminations; winches etc. This should include a diagram showing the critical areas that are to be subjected to NDE",
        url: "",
        subfolder: "General",
        duration: Infinity
    },
    // Man-Riding Winches
    {
        name: "Winch Testing D 018, Sheet 22.1",
        description: "Winch Testing D 018, Sheet 22.1",
        requirement: "Visual examination and function test at maximum SWL. Independent static load test on each brake system at 1.25 times maximum SWL in last 6 months",
        url: "",
        subfolder: "Man-Riding Winches",
        duration: 6
    },
    {
        name: "Winch Testing D 018, Sheet 22.1",
        description: "Winch Testing D 018, Sheet 22.1",
        requirement: "Independent static load test on each brake system at 1.5 times maximum SWL plus a dynamic test at 1.25 times maximum SWL followed by NDE of critical areas in last 12 months",
        url: "",
        subfolder: "Man-Riding Winches",
        duration: 12
    },
    // Main Lift Wire
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: "There have been a number of problems in the past with high tensile bell wire ropes which appear to lose strength even when properly stored. For this reason a test to destruction should be carried out when any high tensile bell wire rope is first put in to service to establish the actual minimum breaking force of the wire at that time. Provided the test result does not fall below the manufacturer's MBF, future destructive test results should be compared to that original figure (the base value), rather than to any claim (or test certificate) provided by the manufacturer. If the test to destruction when the wire is first put into service does indicate a MBF below that of the manufacturer, then the manufacturer's MBF should always be adopted as the base value against which to monitor future deterioration in breaking force. However if the result falls 10% below the MBF then the rope should be discarded. The sample tested to destruction should prove an adequate safety factor exists. This is normally 8 times the SWL",
        url: "",
        subfolder: "Main Lift Wire",
        duration: Infinity
    },
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: "Static test at 1.25 times SWL plus function test at SWL as an integral part of lifting system in last 6 months. Visual examination of visible section at same time",
        url: "",
        subfolder: "Main Lift Wire",
        duration: 6
    },
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: "Cut back a length of rope (see 3.9 below) and test to destruction to prove an adequate safety factor in last 12 months",
        url: "",
        subfolder: "Main Lift Wire",
        duration: 12
    },
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: "Re-terminate and apply static load test at 1.5 times SWL in last 12 months",
        url: "",
        subfolder: "Main Lift Wire",
        duration: 12
    },
    {
        name: "Note: Refer to IMCA SEL 022/M 194, section 13. This guidance refers to bell wire ropes but is equally applicable to surface diving main lift wires",
        description: "Note: Refer to IMCA SEL 022/M 194, section 13. This guidance refers to bell wire ropes but is equally applicable to surface diving main lift wires",
        requirement: `There should be an annual removal of a length of wire rope from just beyond the first sheave from the bell termination with the bell below the surface, allowing for swell, to be discarded. A length sufficient to provide test samples for two tensile tests should be cut from the bell end adjacent to the termination. In certain circumstances the competent person may waive the recommendation to cut all the way back to the first sheave. In systems where there is a single vertical fall directly from the winch to the bell it will be necessary to cut right back to the winch.
        A sample should be tested to destruction to verify that the required factor of safety is maintained. Should the test prove unsatisfactory due to problems with test procedures or where the wire rope fails within a length equal to six wire rope diameters (6d) from the base of the socket or cone, a second test may be carried out. This alternative test should not be used as a way of avoiding discard where a valid test is performed which indicates low strength.
        The ultimate strength test to be carried out on a sample from the part subject to the most severe dynamic loading will be used to verify that a factor of safety of 8:1 is still being maintained and if not the wire rope should be discarded.  Even if the factor of safety is being maintained but the result falls 10% below the base value adopted following the test carried out when the rope was first put into service, it should be discarded.
        One of the tensile test samples should be dismantled and the internals examined`,
        url: "",
        subfolder: "Main Lift Wire",
        duration: Infinity
    },
    // Secondary Recovery
    {
        name: "Demonstration",
        description: "Demonstration",
        requirement: "In the last 12 months the secondary recovery system must have been demonstrated to be able to recover the fully loaded basket (or wet bell) to the surface and bring it on board",
        url: "",
        subfolder: "Secondary Recovery",
        duration: 12
    },
    {
        name: "Winch Testing D 018, Sheet 22.1",
        description: "Winch Testing D 018, Sheet 22.1",
        requirement: "Visual examination and function test at maximum SWL. Independent static load test on each brake system at 1.25 times maximum SWL in last 6 months",
        url: "",
        subfolder: "Secondary Recovery",
        duration: 6
    },
    {
        name: "Winch Testing D 018, Sheet 22.1",
        description: "Winch Testing D 018, Sheet 22.1",
        requirement: "Independent static load test on each brake system at 1.5 times maximum SWL plus a dynamic test at 1.25 times maximum SWL followed by NDE of critical areas in last 12 months",
        url: "",
        subfolder: "Secondary Recovery",
        duration: 12
    },
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: `"There have been a number of problems in the past with high tensile bell wire ropes which appear to lose strength even when properly stored. For this reason a test to destruction should be carried out when any high tensile bell wire rope is first put in to service to establish the actual minimum breaking force of the wire at that time. Provided the test result does not fall below the manufacturer's MBF, future destructive test results should be compared to that original figure (the base value), rather than to any claim (or test certificate) provided by the manufacturer.
        If the test to destruction when the wire is first put into service does indicate a MBF below that of the manufacturer, then the manufacturer's MBF should always be adopted as the base value against which to monitor future deterioration in breaking force. However if the result falls 10% below the MBF then the rope should be discarded.
        The sample tested to destruction should prove an adequate safety factor exists. This is normally 8 times the SWL"`,
        url: "",
        subfolder: "Secondary Recovery",
        duration: Infinity
    },
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: "Static test at 1.25 times SWL plus function test at SWL as an integral part of lifting system in last 6 months. Visual examination of visible section at same time",
        url: "",
        subfolder: "Secondary Recovery",
        duration: 6
    },
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: "Cut back a length of rope (see 4.27 below) and test to destruction to prove an adequate safety factor in last 12 months",
        url: "",
        subfolder: "Secondary Recovery",
        duration: 12
    },
    {
        name: "Wire Testing D 018, Sheet 29.1",
        description: "Wire Testing D 018, Sheet 29.1",
        requirement: "Re-terminate and apply static load test at 1.5 times SWL in last 12 months",
        url: "",
        subfolder: "Secondary Recovery",
        duration: 12
    },
    {
        name: "Note: Refer to IMCA SEL 022/M 194, section 13. This guidance refers to bell wire ropes but is equally applicable to surface diving main lift wires",
        description: "Note: Refer to IMCA SEL 022/M 194, section 13. This guidance refers to bell wire ropes but is equally applicable to surface diving main lift wires",
        requirement: `There should be an annual removal of a length of wire rope from just beyond the first sheave from the bell termination with the bell below the surface, allowing for swell, to be discarded. A length sufficient to provide test samples for two tensile tests should be cut from the bell end adjacent to the termination. In certain circumstances the competent person may waive the recommendation to cut all the way back to the first sheave. In systems where there is a single vertical fall directly from the winch to the bell it will be necessary to cut right back to the winch.
        A sample should be tested to destruction to verify that the required factor of safety is maintained. Should the test prove unsatisfactory due to problems with test procedures or where the wire rope fails within a length equal to six wire rope diameters (6d) from the base of the socket or cone, a second test may be carried out. This alternative test should not be used as a way of avoiding discard where a valid test is performed which indicates low strength.
        The ultimate strength test to be carried out on a sample from the part subject to the most severe dynamic loading will be used to verify that a factor of safety of 8:1 is still being maintained and if not the wire rope should be discarded. Even if the factor of safety is being maintained but the result falls 10% below the base value adopted following the test carried out when the rope was first put into service, it should be discarded.
        One of the tensile test samples should be dismantled and the internals examined.`,
        url: "",
        subfolder: "Secondary Recovery",
        duration: Infinity
    },
    // Hydraulics
    {
        name: "Hydraulics Testing D 018, Sheet 22.2",
        description: "Hydraulics Testing D 018, Sheet 22.2",
        requirement: "Visual examination and function test as an integral part of the handling system within the last 6 months",
        url: "",
        subfolder: "Hydraulics",
        duration: 6
    },
    {
        name: "Hydraulics Testing D 018, Sheet 22.2",
        description: "Hydraulics Testing D 018, Sheet 22.2",
        requirement: "Intercooler/heater (if fitted) checked for function and flow in the last six months",
        url: "",
        subfolder: "Hydraulics",
        duration: 6
    },
    {
        name: "Hydraulics Testing D 018, Sheet 22.2",
        description: "Hydraulics Testing D 018, Sheet 22.2",
        requirement: "Hydraulic fluid/oil analysed OR completely replaced within the last 12 months",
        url: "",
        subfolder: "Hydraulics",
        duration: 12
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Hydraulics",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Hydraulics",
        duration: 30
    },
    // Pneumatic Hoses
    {
        name: "Hose Testing D 018, Sheet 28",
        description: "Hose Testing D 018, Sheet 28",
        requirement: "Visual examination and function test in last 6 months",
        url: "",
        subfolder: "Pneumatic Hoses",
        duration: 6
    },
    {
        name: "Hose Testing D 018, Sheet 28",
        description: "Hose Testing D 018, Sheet 28",
        requirement: "Pressure leak test to maximum rated working pressure in last 2 years",
        url: "",
        subfolder: "Pneumatic Hoses",
        duration: 24
    },
    // Electric Winches
    {
        name: "Electrical Testing D 018, Sheet 11",
        description: "Electrical Testing D 018, Sheet 11",
        requirement: "Visual examination, function test of unit (including protective devices) plus continuity and resistance testing of all cables within the last 6 months ",
        url: "",
        subfolder: "Electric Winches",
        duration: 6
    },
    // Communication
    {
        name: "Comms Testing D 018, Sheet 6",
        description: "Comms Testing D 018, Sheet 6",
        requirement: "The communications must have been function tested in the last 6 months in addition to normal pre-dive checks",
        url: "",
        subfolder: "Communication",
        duration: 6
    },
    // Overall Testing
    {
        name: "Overall Testing D 018, Sheet 22.1",
        description: "Overall Testing D 018, Sheet 22.1",
        requirement: "Visual examination and function test of complete system at maximum SWL. Independent static load test on each brake system at 1.25 times maximum SWL in last 6 months",
        url: "",
        subfolder: "Overall Testing",
        duration: 6
    },
    {
        name: "Overall Testing D 018, Sheet 22.1",
        description: "Overall Testing D 018, Sheet 22.1",
        requirement: "Independent static load test on each brake system at 1.5 times maximum SWL plus a dynamic test at 1.25 times maximum SWL followed by NDE of critical areas in last 12 months",
        url: "",
        subfolder: "Overall Testing",
        duration: 12
    },
    // Firefighting
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "Whether fixed or portable it should be in accordance with manufacturer's specification and fit for the purpose it will be used for",
        url: "",
        subfolder: "Firefighting",
        duration: Infinity
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If it is a portable system then it must have had an external visual examination and check that any indicating device reads within the acceptable range within last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system then the nozzles, valves, pipework, etc. must have been visually examined in the last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system it must be function tested to demonstrate operation of the system OR had a simulated test using air or gas as the test medium in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If an automatic detection/activation system is fitted then a function test to demonstrate correct operation must have been carried out in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    // Breathing Apparatus
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "Visual examination and function test (including communications if fitted) in last 6 months. Check made at same time that cylinder is fully charged",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 6
    },
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "External visual examination of cylinder plus gas leak test to maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 30
    },
    {
        name: "BA Testing D 018, Sheet 5.1 & 9.1",
        description: "BA Testing D 018, Sheet 5.1 & 9.1",
        requirement: "Internal and external visual examination of cylinder plus gas leak test to maximum working pressure in last 5 years (possible overpressure test)",
        url: "",
        subfolder: "Breathing Apparatus",
        duration: 60
    },
]

const DIVING_BASKET = [
    // General
    {
        name: "Structure and Lift Point",
        description: "Structure and Lift Point",
        requirement: "For any basket manufactured after 1 January 2014, documentation should be available showing clearly the designed SWL which should be equal to or greater than the gross weight marked on it (see 1.12 below)",
        url: "",
        subfolder: "General",
        duration: Infinity
    },
    {
        name: "Load Testing D 018, Sheet 3",
        description: "Load Testing D 018, Sheet 3",
        requirement: "Visual examination of lifting points and main structure (including secondary lift point) in last 6 months for damage/corrosion",
        url: "",
        subfolder: "General",
        duration: 6
    },
    {
        name: "Load Testing D 018, Sheet 3",
        description: "Load Testing D 018, Sheet 3",
        requirement: "Load test of lifting point (this also applies to secondary lift points) at 1.5 times gross weight of the basket, fully equipped with divers and equipment with NDE of lifting points or pad eyes before and after test in last 12 months",
        url: "",
        subfolder: "General",
        duration: 12
    },
    // Emergency Cylinder
    {
        name: "Cylinder Testing D 018, Sheet 10.1",
        description: "Cylinder Testing D 018, Sheet 10.1",
        requirement: "External visual examination in last 6 months",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 6
    },
    {
        name: "Cylinder Testing D 018, Sheet 10.1",
        description: "Cylinder Testing D 018, Sheet 10.1",
        requirement: "Internal and external examination plus gas leak test to maximum working pressure in last 2 years (possible overpressure test)",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 24
    },
    {
        name: "Cylinder Testing D 018, Sheet 10.1",
        description: "Cylinder Testing D 018, Sheet 10.1",
        requirement: "Hydraulic overpressure test to 1.5 times maximum working pressure (or the factor required by the design code or standard if different) plus the 2 yearly tests above, within the last 4 years",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 48
    },
    {
        name: "Gauge Testing D 018, Sheet 20",
        description: "Gauge Testing D 018, Sheet 20",
        requirement: "Visual examination and function test of pressure indicating gauge in last 6 months",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Internal pressure test of all valves, pipework, fittings, etc. to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: Infinity
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Visual examination of pipework/fittings in last 6 months",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Gas leak test of pipework and fittings at maximum working pressure in last 2 years",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 24
    },
    {
        name: "Hose Testing D 018, Sheet 28",
        description: "Hose Testing D 018, Sheet 28",
        requirement: "Visual examination and function testing in the last 6 months",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 6
    },
    {
        name: "Hose Testing D 018, Sheet 28",
        description: "Hose Testing D 018, Sheet 28",
        requirement: "Pressure leak test to maximum rated working pressure in last 2 years",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 24
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Emergency Cylinder",
        duration: 30
    },
]

const WET_BELL = [
    // General
    {
        name: "Load Testing D 018, Sheet 3",
        description: "Load Testing D 018, Sheet 3",
        requirement: "Visual examination of lifting points and main structure (including secondary lift point) in last 6 months for damage/corrosion",
        url: "",
        subfolder: "General",
        duration: 6
    },
    {
        name: "Load Testing D 018, Sheet 3",
        description: "Load Testing D 018, Sheet 3",
        requirement: "Load test of lifting point (this also applies to secondary lift points) at 1.5 times the gross weight of the basket, fully equipped with divers and equipment with NDE of lifting points or pad eyes before and after test in last 12 months",
        url: "",
        subfolder: "General",
        duration: 12
    },
    {
        name: "Buoyancy",
        description: "Buoyancy",
        requirement: "A test should have been carried out to demonstrate that the wet bell, fully outfitted and without divers, remains negatively buoyant when the dome is fully filled with air. Its in-water weight during this test should be noted on the certificate",
        url: "",
        subfolder: "General",
        duration: Infinity
    },
    // Air Cylinder(s)
    {
        name: "Cylinder Testing D 018, Sheet 10.1",
        description: "Cylinder Testing D 018, Sheet 10.1",
        requirement: "Cylinder external visual examination in last 6 months",
        url: "",
        subfolder: "Air Cylinder(s)",
        duration: 6
    },
    {
        name: "Cylinder Testing D 018, Sheet 10.1",
        description: "Cylinder Testing D 018, Sheet 10.1",
        requirement: "Internal and external examination plus gas leak test to maximum working pressure in last 2 years (possible overpressure test)",
        url: "",
        subfolder: "Air Cylinder(s)",
        duration: 24
    },
    {
        name: "Cylinder Testing D 018, Sheet 10.1",
        description: "Cylinder Testing D 018, Sheet 10.1",
        requirement: "Hydraulic overpressure test to 1.5 times maximum working pressure (or the factor required by the design code or standard if different) plus the 2 yearly tests above, within the last 4 years",
        url: "",
        subfolder: "Air Cylinder(s)",
        duration: 48
    },
    // Outfitting
    {
        name: "Gauge Testing D 018, Sheet 20",
        description: "Gauge Testing D 018, Sheet 20",
        requirement: "Visual examination and function test of pressure indicating gauge in last 6 months",
        url: "",
        subfolder: "Outfitting",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Internal pressure test of all valves, pipework, fittings, etc. to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Outfitting",
        duration: Infinity
    },
    {
         name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Visual examination of pipework/fittings in last 6 months",
        url: "",
        subfolder: "Outfitting",
        duration: 6
    },
    {
         name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Gas leak test of pipework and fittings at maximum working pressure in last 2 years",
        url: "",
        subfolder: "Outfitting",
        duration: 24
    },
    {
        name: "Electrical Testing D 018, Sheet 11",
        description: "Electrical Testing D 018, Sheet 11",
        requirement: "Visual examination, function test plus continuity and resistance tests of all cables and electrical equipment in last 6 months",
        url: "",
        subfolder: "Outfitting",
        duration: 6
    },
    {
        name: "Gauge Calibration D 018, Sheet 18 or 19 (as appropriate)",
        description: "Gauge Calibration D 018, Sheet 18 or 19 (as appropriate)",
        requirement: "All gauges must have been visually examined, function tested in situ, calibrated and/or tested (as relevant) to the required accuracy in the last 6 months",
        url: "",
        subfolder: "Outfitting",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Relief Valve Testing",
        url: "",
        subfolder: "Outfitting",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Outfitting",
        duration: 30
    },
]

const WET_BELL_MAIN_UMBILICAL = [
    // Testing
    {
        name: "Electrical Components D 018, Sheet 11",
        description: "Electrical Components D 018, Sheet 11",
        requirement: "Visual examination, function test, continuity and resistance testing carried out in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Hose Components D 018, Sheet 28",
        description: "Hose Components D 018, Sheet 28",
        requirement: "When new, hydro test to 1.5 times maximum working pressure or as recommended",
        url: "",
        subfolder: "Testing",
        duration: Infinity
    },
    {
        name: "Hose Components D 018, Sheet 28",
        description: "Hose Components D 018, Sheet 28",
        requirement: "Visual examination and function test in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Hose Components D 018, Sheet 28",
        description: "Hose Components D 018, Sheet 28",
        requirement: "Pressure leak test to maximum working pressure in last 2 years",
        url: "",
        subfolder: "Testing",
        duration: 24
    },
    // Spare
    {
        name: "Certification",
        description: "Certification",
        requirement: "Tested and certified as in Testing",
        url: "",
        subfolder: "Spare",
        duration: Infinity
    },
    {
        name: "Pre-use Testing",
        description: "Pre-use Testing",
        requirement: "Leak tested at intended working pressure (and flushed through if necessary) before use",
        url: "",
        subfolder: "Spare",
        duration: Infinity
    },
]

const DIVER_HEATING_SYSTEM = [
    // Firefighting
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "Whether fixed or portable it should be in accordance with manufacturer's specification and fit for the purpose it will be used for",
        url: "",
        subfolder: "Firefighting",
        duration: Infinity
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If it is a portable system then it must have had an external visual examination and check that any indicating device reads within the acceptable range within last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system then the nozzles, valves, pipework, etc. must have been visually examined in the last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system it must be function tested to demonstrate operation of the system OR had a simulated test using air or gas as the test medium in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If an automatic detection/activation system is fitted then a function test to demonstrate correct operation must have been carried out in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    // Testing
    {
        name: "Hot Water System D 018, Sheet 21",
        description: "Hot Water System D 018, Sheet 21",
        requirement: "Visual examination and function test in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Pipework D 018, Sheet 24.1",
        description: "Pipework D 018, Sheet 24.1",
        requirement: "Pressure test to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Testing",
        duration: Infinity
    },
    {
        name: "Pipework D 018, Sheet 24.1",
        description: "Pipework D 018, Sheet 24.1",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Pipework D 018, Sheet 24.1",
        description: "Pipework D 018, Sheet 24.1",
        requirement: "Gas (or fluid) leak test at maximum working pressure in last 2 years",
        url: "",
        subfolder: "Testing",
        duration: 24
    },
    {
        name: "Gauges D 018, Sheet 20",
        description: "Gauges D 018, Sheet 20",
        requirement: "Visual examination and function test of any indicating gauges in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Electrical D 018, Sheet 11",
        description: "Electrical D 018, Sheet 11",
        requirement: "Visual examination, function test, continuity and resistance tests of all electrics in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Pressure Vessels D 018, Sheet 9.2",
        description: "Pressure Vessels D 018, Sheet 9.2",
        requirement: "External visual examination in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
         name: "Pressure Vessels D 018, Sheet 9.2",
        description: "Pressure Vessels D 018, Sheet 9.2",
        requirement: "Internal and external examination plus gas (or fluid) leak test to maximum working pressure in last 15 months",
        url: "",
        subfolder: "Testing",
        duration: 15
    },
    {
         name: "Pressure Vessels D 018, Sheet 9.2",
        description: "Pressure Vessels D 018, Sheet 9.2",
        requirement: "Internal and external examination plus overpressure test to 1.5 times maximum working pressure (or the factor required by the design code or standard if different) plus gas (or fluid) leak test to maximum working pressure in last 5 years",
        url: "",
        subfolder: "Testing",
        duration: 60
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Testing",
        duration: 30
    },
]

const DIVERS_UMBILICALS = [
    // Testing
    {
        name: "Electrical Components D 018, Sheet 11",
        description: "Electrical Components D 018, Sheet 11",
        requirement: "Visual examination, function test, continuity and resistance testing carried out in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Hose Components D 018, Sheet 28",
        description: "Hose Components D 018, Sheet 28",
        requirement: "When new, hydro test to 1.5 times maximum working pressure or as recommended",
        url: "",
        subfolder: "Testing",
        duration: Infinity
    },
    {
        name: "Hose Components D 018, Sheet 28",
        description: "Hose Components D 018, Sheet 28",
        requirement: "Visual examination and function test in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Hose Components D 018, Sheet 28",
        description: "Hose Components D 018, Sheet 28",
        requirement: "Pressure leak test to maximum working pressure in last 2 years",
        url: "",
        subfolder: "Testing",
        duration: 24
    },
]

const DIVERS_PERSONAL_EQUIPMENT = [
    // Helmets (or Masks)
    {
        name: "Helmet Testing D 018, Sheet 5.3",
        description: "Helmet Testing D 018, Sheet 5.3",
        requirement: "Visual examination and function test at atmospheric pressure in last 6 months",
        url: "",
        subfolder: "Helmets (or Masks)",
        duration: 6
    },
    {
        name: "Helmet Testing D 018, Sheet 5.3",
        description: "Helmet Testing D 018, Sheet 5.3",
        requirement: "Inspected and tested in line with manufacturer's recommendations in last 12 months",
        url: "",
        subfolder: "Helmets (or Masks)",
        duration: 12
    },
    // Emergency Gas Supply (Bail-Out) Cylinders
    {
        name: "Cylinder Testing - Seamless Cylinders D 018, Sheet 10.1",
        description: "Cylinder Testing - Seamless Cylinders D 018, Sheet 10.1",
        requirement: "External and internal visual examination in last 6 months",
        url: "",
        subfolder: "Emergency Gas Supply (Bail-Out) Cylinders",
        duration: 6
    },
    {
        name: "Cylinder Testing - Seamless Cylinders D 018, Sheet 10.1",
        description: "Cylinder Testing - Seamless Cylinders D 018, Sheet 10.1",
        requirement: "External and internal visual examination plus gas leak test to maximum working pressure in last 2 years (possible overpressure test)",
        url: "",
        subfolder: "Emergency Gas Supply (Bail-Out) Cylinders",
        duration: 24
    },
    {
        name: "Cylinder Testing - Seamless Cylinders D 018, Sheet 10.1",
        description: "Cylinder Testing - Seamless Cylinders D 018, Sheet 10.1",
        requirement: "Hydraulic overpressure test to 1.5 times maximum working pressure (or the factor required by the design code or standard if different) plus the 2 yearly tests above, in last 4 years",
        url: "",
        subfolder: "Emergency Gas Supply (Bail-Out) Cylinders",
        duration: 48
    },
    {
        name: "Cylinder Testing - Composite Cylinders D 018, Sheet 10.2",
        description: "Cylinder Testing - Composite Cylinders D 018, Sheet 10.2",
        requirement: "External and internal visual examination in last 6 months",
        url: "",
        subfolder: "Emergency Gas Supply (Bail-Out) Cylinders",
        duration: 6
    },
    {
        name: "Cylinder Testing - Composite Cylinders D 018, Sheet 10.2",
        description: "Cylinder Testing - Composite Cylinders D 018, Sheet 10.2",
        requirement: "External and internal visual examination plus gas leak test to maximum working pressure in last 12 months (possible overpressure test)",
        url: "",
        subfolder: "Emergency Gas Supply (Bail-Out) Cylinders",
        duration: 12
    },
    {
        name: "Cylinder Testing - Composite Cylinders D 018, Sheet 10.2",
        description: "Cylinder Testing - Composite Cylinders D 018, Sheet 10.2",
        requirement: "Hydraulic proof pressure test to the pressure marked on the cylinder OR volumetric expansion test as appropriate to the design of the cylinder in last 5 years. In either case plus the 6 and 12 monthly tests above",
        url: "",
        subfolder: "Emergency Gas Supply (Bail-Out) Cylinders",
        duration: 12
    },
    // Whips and Connectors
    {
        name: "Hose Testing D 018, Sheet 28",
        description: "Hose Testing D 018, Sheet 28",
        requirement: "Visual examination and function testing at full working pressure in the last 6 months",
        url: "",
        subfolder: "Whips and Connectors",
        duration: 6
    },
    {
        name: "Hose Testing D 018, Sheet 28",
        description: "Hose Testing D 018, Sheet 28",
        requirement: "Pressure leak test to maximum rated working pressure in last 2 years",
        url: "",
        subfolder: "Whips and Connectors",
        duration: 24
    },
    {
        name: "Gauge Testing D 018, Sheet 20",
        description: "Gauge Testing D 018, Sheet 2",
        requirement: "Visual examination and function test of pressure indicating gauge in last 6 months",
        url: "",
        subfolder: "Whips and Connectors",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Internal pressure test of all valves, pipework, fittings etc. to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Whips and Connectors",
        duration: Infinity
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Visual examination of pipework/fittings in last 6 months",
        url: "",
        subfolder: "Whips and Connectors",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1",
        description: "Pipework Testing D 018, Sheet 24.1",
        requirement: "Gas leak test of pipework and fittings at maximum working pressure in last 2 years",
        url: "",
        subfolder: "Whips and Connectors",
        duration: 24
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Whips and Connectors",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Whips and Connectors",
        duration: 30
    },
]

const COMPRESSORS = [
    // Firefighting
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "Whether fixed or portable it should be in accordance with manufacturer's specification and fit for the purpose it will be used for",
        url: "",
        subfolder: "Firefighting",
        duration: Infinity
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If it is a portable system then it must have had an external visual examination and check that any indicating device reads within the acceptable range within last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system then the nozzles, valves, pipework, etc. must have been visually examined in the last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system it must be function tested to demonstrate operation of the system OR had a simulated test using air or gas as the test medium in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If an automatic detection/activation system is fitted then a function test to demonstrate correct operation must have been carried out in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    // Safety Devices
    {
        name: "Testing D 018, Sheets 7 & 17",
        description: "Testing D 018, Sheets 7 & 17",
        requirement: "Visual examination and function test of safety devices in last 6 months",
        url: "",
        subfolder: "Safety Devices",
        duration: 6
    },
    {
        name: "Testing D 018, Sheet 7",
        description: "Testing D 018, Sheet 7",
        requirement: "Visual examination and function test of safety devices in last 6 months",
        url: "",
        subfolder: "Safety Devices",
        duration: 6
    },
    {
        name: "Analyser Testing D 018, Sheet 2",
        description: "Analyser Testing D 018, Sheet 2",
        requirement: "Analysers should be examined, function tested and calibrated in situ within the last 6 months",
        url: "",
        subfolder: "Safety Devices",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Safety Devices",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Safety Devices",
        duration: 30
    },
    // Pipework
    {
        name: "Testing D 018, Sheet 24.1 and 24.2",
        description: "Testing D 018, Sheet 24.1 and 24.2",
        requirement: "Pressure test to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Pipework",
        duration: Infinity
    },
    {
        name: "Testing D 018, Sheet 24.1 and 24.2",
        description: "Testing D 018, Sheet 24.1 and 24.2",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Pipework",
        duration: 6
    },
    {
        name: "Testing D 018, Sheet 24.1 and 24.2",
        description: "Testing D 018, Sheet 24.1 and 24.2",
        requirement: "Gas leak test at maximum working pressure in last 2 years",
        url: "",
        subfolder: "Pipework",
        duration: 24
    },
    // Air Receivers
    {
        name: "Testing D 018, Sheet 26",
        description: "Testing D 018, Sheet 26",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Air Receivers",
        duration: 6
    },
    {
        name: "Testing D 018, Sheet 26",
        description: "Testing D 018, Sheet 26",
        requirement: "Internal and external inspection OR internal overpressure test plus (in both cases) gas leak test to full working pressure in last 2½ years",
        url: "",
        subfolder: "Air Receivers",
        duration: 30
    },
    // Electrics
    {
        name: "Electrical Testing D 018, Sheet 11",
        description: "Electrical Testing D 018, Sheet 11",
        requirement: "Visual examination, function test plus continuity and resistance tests in last 6 months",
        url: "",
        subfolder: "Electrics",
        duration: 6
    },
    // Operational Testing
    {
        name: "Compressor Testing D 018, Sheet 7",
        description: "Compressor Testing D 018, Sheet 7",
        requirement: "Visual examination and function test of compressor in last 6 months",
        url: "",
        subfolder: "Operational Testing",
        duration: 6
    },
    {
        name: "Compressor Testing D 018, Sheet 7",
        description: "Compressor Testing D 018, Sheet 7",
        requirement: "Check of delivery rate and pressure of compressor in last 6 months",
        url: "",
        subfolder: "Operational Testing",
        duration: 6
    },
    {
        name: "Compressor Testing D 018, Sheet 7",
        description: "Compressor Testing D 018, Sheet 7",
        requirement: "Check of output purity of compressor against a suitable standard in last 6 months",
        url: "",
        subfolder: "Operational Testing",
        duration: 6
    },
]

const HP_AIR_AND_GAS_STORAGE = [
    // Testing
    {
        name: "Cylinder Testing D 018, Sheet 9.1",
        description: "Cylinder Testing D 018, Sheet 9.1",
        requirement: "External visual examination in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Cylinder Testing D 018, Sheet 9.1",
        description: "Cylinder Testing D 018, Sheet 9.1",
        requirement: "External visual examination and gas leak test to maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Testing",
        duration: 30
    },
    {
        name: "Cylinder Testing D 018, Sheet 9.1",
        description: "Cylinder Testing D 018, Sheet 9.1",
        requirement: "Internal and external visual examination and gas leak test to maximum working pressure in last 5 years (possible overpressure test and/or NDE followed by a gas leak test to maximum working pressure)",
        url: "",
        subfolder: "Testing",
        duration: 60
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Pressure test to 1.5 times maximum working pressure when new",
        url: "",
        subfolder: "Testing",
        duration: Infinity
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Internal cleanliness verified to appropriate standard",
        url: "",
        subfolder: "Testing",
        duration: Infinity
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        description: "Pipework Testing D 018, Sheet 24.1 & 24.2",
        requirement: "Gas leak test at maximum working pressure in last 2 years",
        url: "",
        subfolder: "Testing",
        duration: 24
    },
    {
        name: "Lifting Equipment (Quad Slings etc.) Testing D 018, Sheet 23",
        description: "Lifting Equipment (Quad Slings etc.) Testing D 018, Sheet 23",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Lifting Equipment (Quad Slings etc.) Testing D 018, Sheet 23",
        description: "Lifting Equipment (Quad Slings etc.) Testing D 018, Sheet 23",
        requirement: "Load test at 1.5 times maximum SWL or alternative examination/testing as required by the competent person in last 12 months",
        url: "",
        subfolder: "Testing",
        duration: 12
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Visual examination in last 6 months",
        url: "",
        subfolder: "Testing",
        duration: 6
    },
    {
        name: "Relief Valve Testing D 018, Sheet 24.3",
        description: "Relief Valve Testing D 018, Sheet 24.3",
        requirement: "Function test at required relief setting followed by gas leak test at maximum working pressure in last 2½ years",
        url: "",
        subfolder: "Testing",
        duration: 30
    },
    // Firefighting
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "Whether fixed or portable it should be in accordance with manufacturer's specification and fit for the purpose it will be used for",
        url: "",
        subfolder: "Firefighting",
        duration: Infinity
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If it is a portable system then it must have had an external visual examination and check that any indicating device reads within the acceptable range within last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system then the nozzles, valves, pipework, etc. must have been visually examined in the last 6 months",
        url: "",
        subfolder: "Firefighting",
        duration: 6
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If this is a fixed system it must be function tested to demonstrate operation of the system OR had a simulated test using air or gas as the test medium in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
    {
        name: "Firefighting Testing D 018, Sheet 15 & 16",
        description: "Firefighting Testing D 018, Sheet 15 & 16",
        requirement: "If an automatic detection/activation system is fitted then a function test to demonstrate correct operation must have been carried out in the last 12 months",
        url: "",
        subfolder: "Firefighting",
        duration: 12
    },
]

const GENERIC_DATA = [
    {
        id: "Dive Control",
        data: DIVE_CONTROL
    },
    {
        id: "Twinlock Air Chamber",
        data: TWINLOCK_AIR_CHAMBER
    },
    {
        id: "Diver Launch and Recovery",
        data: DIVER_LAUNCH_AND_RECOVERY
    },
    {
        id: "Diving Basket",
        data: DIVING_BASKET
    },
    {
        id: "Wet Bell",
        data: WET_BELL
    },
    {
        id: "Wet Bell Main Umbilical",
        data: WET_BELL_MAIN_UMBILICAL
    },
    {
        id: "Diver Heating System",
        data: DIVER_HEATING_SYSTEM
    },
    {
        id: "Divers' Umbilicals",
        data: DIVERS_UMBILICALS
    },
    {
        id: "Divers' Personal Equipment",
        data: DIVERS_PERSONAL_EQUIPMENT
    },
    {
        id: "Compressors",
        data: COMPRESSORS
    },
    {
        id: "HP Air and Gas Storage",
        data: HP_AIR_AND_GAS_STORAGE
    },
]

module.exports = {
    GENERIC_DATA
}