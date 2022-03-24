export interface WeekendOptions {
    NumStarters: number;
    StartingGrid: string;
    QualifyScoring: string;
    CourseCautions: string;
    StandingStart: number;
    ShortParadeLap: number;
    Restarts: string;
    WeatherType: string;
    Skies: string;
    WindDirection: string;
    WindSpeed: string;
    WeatherTemp: string;
    RelativeHumidity: string;
    FogLevel: string;
    TimeOfDay: string;
    Date: Date;
    EarthRotationSpeedupFactor: number;
    Unofficial: number;
    CommercialMode: string;
    NightMode: string;
    IsFixedSetup: number;
    StrictLapsChecking: string;
    HasOpenRegistration: number;
    HardcoreLevel: number;
    NumJokerLaps: number;
    IncidentLimit: string;
    FastRepairsLimit: string;
    GreenWhiteCheckeredLimit: number;
}

export interface TelemetryOptions {
    TelemetryDiskFile: string;
}

export interface WeekendInfo {
    TrackName: string;
    TrackID: number;
    TrackLength: string;
    TrackLengthOfficial: string;
    TrackDisplayName: string;
    TrackDisplayShortName: string;
    TrackConfigName?: any;
    TrackCity: string;
    TrackCountry: string;
    TrackAltitude: string;
    TrackLatitude: string;
    TrackLongitude: string;
    TrackNorthOffset: string;
    TrackNumTurns: number;
    TrackPitSpeedLimit: string;
    TrackType: string;
    TrackDirection: string;
    TrackWeatherType: string;
    TrackSkies: string;
    TrackSurfaceTemp: string;
    TrackAirTemp: string;
    TrackAirPressure: string;
    TrackWindVel: string;
    TrackWindDir: string;
    TrackRelativeHumidity: string;
    TrackFogLevel: string;
    TrackCleanup: number;
    TrackDynamicTrack: number;
    TrackVersion: string;
    SeriesID: number;
    SeasonID: number;
    SessionID: number;
    SubSessionID: number;
    LeagueID: number;
    Official: number;
    RaceWeek: number;
    EventType: string;
    Category: string;
    SimMode: string;
    TeamRacing: number;
    MinDrivers: number;
    MaxDrivers: number;
    DCRuleSet: string;
    QualifierMustStartRace: number;
    NumCarClasses: number;
    NumCarTypes: number;
    HeatRacing: number;
    BuildType: string;
    BuildTarget: string;
    BuildVersion: string;
    WeekendOptions: WeekendOptions;
    TelemetryOptions: TelemetryOptions;
}

export interface ResultsFastestLap {
    CarIdx: number;
    FastestLap: number;
    FastestTime: number;
}

export interface Session {
    SessionNum: number;
    SessionLaps: string;
    SessionTime: string;
    SessionNumLapsToAvg: number;
    SessionType: string;
    SessionTrackRubberState: string;
    SessionName: string;
    SessionSubType?: any;
    SessionSkipped: number;
    SessionRunGroupsUsed: number;
    SessionEnforceTireCompoundChange: number;
    ResultsPositions?: any;
    ResultsFastestLap: ResultsFastestLap[];
    ResultsAverageLapTime: number;
    ResultsNumCautionFlags: number;
    ResultsNumCautionLaps: number;
    ResultsNumLeadChanges: number;
    ResultsLapsComplete: number;
    ResultsOfficial: number;
}

export interface SessionInfo {
    Sessions: Session[];
}

export interface Camera {
    CameraNum: number;
    CameraName: string;
}

export interface Group {
    GroupNum: number;
    GroupName: string;
    Cameras: Camera[];
    IsScenic?: boolean;
}

export interface CameraInfo {
    Groups: Group[];
}

export interface Frequency {
    FrequencyNum: number;
    FrequencyName: string;
    Priority: number;
    CarIdx: number;
    EntryIdx: number;
    ClubID: number;
    CanScan: number;
    CanSquawk: number;
    Muted: number;
    IsMutable: number;
    IsDeletable: number;
}

export interface Radio {
    RadioNum: number;
    HopCount: number;
    NumFrequencies: number;
    TunedToFrequencyNum: number;
    ScanningIsOn: number;
    Frequencies: Frequency[];
}

export interface RadioInfo {
    SelectedRadioNum: number;
    Radios: Radio[];
}

export interface Driver {
    CarIdx: number;
    UserName: string;
    AbbrevName?: any;
    Initials?: any;
    UserID: number;
    TeamID: number;
    TeamName: string;
    CarNumber: string;
    CarNumberRaw: number;
    CarPath: string;
    CarClassID: number;
    CarID: number;
    CarIsPaceCar: number;
    CarIsAI: number;
    CarScreenName: string;
    CarScreenNameShort: string;
    CarClassShortName?: any;
    CarClassRelSpeed: number;
    CarClassLicenseLevel: number;
    CarClassMaxFuelPct: string;
    CarClassWeightPenalty: string;
    CarClassPowerAdjust: string;
    CarClassDryTireSetLimit: string;
    CarClassColor: number;
    CarClassEstLapTime: number;
    IRating: number;
    LicLevel: number;
    LicSubLevel: number;
    LicString: string;
    LicColor: string;
    IsSpectator: number;
    CarDesignStr: string;
    HelmetDesignStr: string;
    SuitDesignStr: string;
    CarNumberDesignStr: string;
    CarSponsor_1: number;
    CarSponsor_2: number;
    CurDriverIncidentCount: number;
    TeamIncidentCount: number;
}

export interface DriverInfo {
    DriverCarIdx: number;
    DriverUserID: number;
    PaceCarIdx: number;
    DriverHeadPosX: number;
    DriverHeadPosY: number;
    DriverHeadPosZ: number;
    DriverCarIdleRPM: number;
    DriverCarRedLine: number;
    DriverCarEngCylinderCount: number;
    DriverCarFuelKgPerLtr: number;
    DriverCarFuelMaxLtr: number;
    DriverCarMaxFuelPct: number;
    DriverCarGearNumForward: number;
    DriverCarGearNeutral: number;
    DriverCarGearReverse: number;
    DriverCarSLFirstRPM: number;
    DriverCarSLShiftRPM: number;
    DriverCarSLLastRPM: number;
    DriverCarSLBlinkRPM: number;
    DriverCarVersion: string;
    DriverPitTrkPct: number;
    DriverCarEstLapTime: number;
    DriverSetupName: string;
    DriverSetupIsModified: number;
    DriverSetupLoadTypeName: string;
    DriverSetupPassedTech: number;
    DriverIncidentCount: number;
    Drivers: Driver[];
}

export interface Sector {
    SectorNum: number;
    SectorStartPct: number;
}

export interface SplitTimeInfo {
    Sectors: Sector[];
}

export interface LeftFront {
    ColdPressure: string;
    LastHotPressure: string;
    LastTempsOMI: string;
    TreadRemaining: string;
}

export interface LeftRear {
    ColdPressure: string;
    LastHotPressure: string;
    LastTempsOMI: string;
    TreadRemaining: string;
}

export interface RightFront {
    ColdPressure: string;
    LastHotPressure: string;
    LastTempsIMO: string;
    TreadRemaining: string;
}

export interface RightRear {
    ColdPressure: string;
    LastHotPressure: string;
    LastTempsIMO: string;
    TreadRemaining: string;
}

export interface FrontAero {
    WingFlapAngle: string;
    WingMainplaneAngle: string;
    WingFlapGurney: string;
}

export interface RearAero {
    WingUpperElementSetting: string;
    WingLowerElementAngle: string;
    WingLowerElementFlapGurney: string;
    WingEndPlateVerticalGurney: string;
}

export interface AeroCalculator {
    FrontRhAtSpeed: string;
    RearRhAtSpeed: string;
    FrontDownforce: string;
    DownforceToDrag: string;
}

export interface TiresAero {
    LeftFront: LeftFront;
    LeftRear: LeftRear;
    RightFront: RightFront;
    RightRear: RightRear;
    FrontAero: FrontAero;
    RearAero: RearAero;
    AeroCalculator: AeroCalculator;
}

export interface Front {
    ArbDiameter: string;
    ArbBlades: number;
    ArbPreload: string;
    ToeIn: string;
    BrakePressureBias: string;
}

export interface LeftFront2 {
    CornerWeight: string;
    RideHeight: string;
    SpringPerchOffset: string;
    SpringRate: string;
    ArbRockerHole: string;
    Camber: string;
    Caster: string;
}

export interface LeftRear2 {
    CornerWeight: string;
    RideHeight: string;
    SpringPerchOffset: string;
    SpringRate: string;
    ArbRockerHole: string;
    Camber: string;
}

export interface RightFront2 {
    CornerWeight: string;
    RideHeight: string;
    SpringPerchOffset: string;
    SpringRate: string;
    ArbRockerHole: string;
    Camber: string;
    Caster: string;
}

export interface RightRear2 {
    CornerWeight: string;
    RideHeight: string;
    SpringPerchOffset: string;
    SpringRate: string;
    ArbRockerHole: string;
    Camber: string;
}

export interface Rear {
    FuelLevel: string;
    ToeIn: string;
    ArbPreload: string;
    CrossWeight: string;
}

export interface Chassis {
    Front: Front;
    LeftFront: LeftFront2;
    LeftRear: LeftRear2;
    RightFront: RightFront2;
    RightRear: RightRear2;
    Rear: Rear;
}

export interface LeftFrontDamper {
    LowSpeedComp: string;
    HighSpeedComp: string;
    LowSpeedRebound: string;
    HighSpeedRebound: string;
}

export interface LeftRearDamper {
    LowSpeedComp: string;
    HighSpeedComp: string;
    LowSpeedRebound: string;
    HighSpeedRebound: string;
}

export interface RightFrontDamper {
    LowSpeedComp: string;
    HighSpeedComp: string;
    LowSpeedRebound: string;
    HighSpeedRebound: string;
}

export interface RightRearDamper {
    LowSpeedComp: string;
    HighSpeedComp: string;
    LowSpeedRebound: string;
    HighSpeedRebound: string;
}

export interface Dampers {
    LeftFrontDamper: LeftFrontDamper;
    LeftRearDamper: LeftRearDamper;
    RightFrontDamper: RightFrontDamper;
    RightRearDamper: RightRearDamper;
}

export interface Gearbox {
    FirstGear: string;
    SecondGear: string;
    ThirdGear: string;
    FourthGear: string;
    FifthGear: string;
    SixthGear: string;
}

export interface Drivetrain {
    Gearbox: Gearbox;
}

export interface CarSetup {
    UpdateCount: number;
    TiresAero: TiresAero;
    Chassis: Chassis;
    Dampers: Dampers;
    Drivetrain: Drivetrain;
}

export interface Data {
    WeekendInfo: WeekendInfo;
    SessionInfo: SessionInfo;
    CameraInfo: CameraInfo;
    RadioInfo: RadioInfo;
    DriverInfo: DriverInfo;
    SplitTimeInfo: SplitTimeInfo;
    CarSetup: CarSetup;
}

export interface ISession {
    timestamp: Date;
    data: Data;
}


