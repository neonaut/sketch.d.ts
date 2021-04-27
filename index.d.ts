import { _Sketch } from "./sketch";

/**
* Javascript API for Sketch without UI, Settings, DataSupplier, Async
* @example // require without UI, Settings, DataSupplier, Async
* var sketch = require('sketch/dom');
* // require others according to your needs
* var async: Async = require('sketch/async');
* var DataSupplier: DataSupplier = require('sketch/data-supplier');
* var UI: UI = require('sketch/ui');
* var Settings: Settings = require('sketch/settings');
*/
export type SketchDom = _Sketch.SketchDom;

/**
* Javascript API for Sketch
* @example var sketch: Sketch = require('sketch');
*/
export type Sketch = _Sketch.Sketch;

export type Component = _Sketch.Component;

/** A Sketch document. */
export type Document = _Sketch.Document;

/** A Sketch Library. */
export type Library = _Sketch.Library;

/** The style of a Layer. */
export type Style = _Sketch.Style;

/** A shared style (either a layer style or a text style). */
export type SharedStyle = _Sketch.SharedStyle;

/** The prototyping action associated with a layer. */
export type Flow = _Sketch.Flow;

/** An export format associated with a layer. */
export type ExportFormat = _Sketch.ExportFormat;

/** A utility class to represent the layers selection. Contains some methods to make interacting
 * with a selection easier. */
export type Selection = _Sketch.Selection;

/** A utility class to represent a curve point (with handles to control the curve in a path). */
export type CurvePoint = _Sketch.CurvePoint;

/** A utility class to represent a point. */
export type Point = _Sketch.Point;

/** A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier. */
export type Rectangle = _Sketch.Rectangle;

export type SmartLayoutObject = _Sketch.SmartLayoutObject;

/** The SmartLayout object contains the set of possible Smart Layouts that can be applied to SymbolMaster and Group layers. */
export type SmartLayout = _Sketch.SmartLayout;

/** A Sketch layer. This is the base class for most of the Sketch components and defines methods to manipulate them. */
export type Layer = _Sketch.Layer;

/** A group of layers. It is also an instance of Layer so all the methods defined there are available. */
export type Group = _Sketch.Group;

/** A Sketch page. It is an instance of both Layer and Group so all the methods defined there are available. */
export type Page = _Sketch.Page;

/** A Sketch artboard. It is an instance of both Layer and Group so all the methods defined there are available. */
export type Artboard = _Sketch.Artboard;

/** A shape layer. It is shaped by its layers which have boolean operations between them. */
export type Shape = _Sketch.Shape;

/** An image layer. */
export type Image = _Sketch.Image;

/** A shape path layer. */
export type ShapePath = _Sketch.ShapePath;

/** A text layer. */
export type Text = _Sketch.Text;

/** A Symbol master. It is an instance of Artboard (hence of Layer and Group) so all the methods defined there are available. */
export type SymbolMaster = _Sketch.SymbolMaster;

/** A Symbol instance. */
export type SymbolInstance = _Sketch.SymbolInstance;

/** A Sketch hotspot. */
export type HotSpot = _Sketch.HotSpot;

/** A Sketch slice. */
export type Slice = _Sketch.Slice;

/** A Symbol override. This component is not exposed, it is only returned when accessing the overrides of a Symbol Instance or Symbol Master. The overrides are not available until after the instance is injected into the document. */
export type Override = _Sketch.Override;

/** A special object passed in the context of the action to supply data when the item is an Override. */
export type DataOverride = _Sketch.DataOverride;

/** A set of functions to handle user settings. The settings are persisted when the user closes Sketch. */
export type Settings = _Sketch.Settings;

/** A set of functions to show some user interfaces. The set is small on purpose. Any more complex UI should be provided by third party libraries and doesn’t need to be in the core. */
export type UI = _Sketch.UI;

/** When your plugin supplies some data, don’t forget to set the suppliesData field to true in your manifest.json! */
export type DataSupplier = _Sketch.DataSupplier;

/** A way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running. */
export type Async = _Sketch.Async;

/** Fiber is a way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running. */
export type Fiber = _Sketch.Fiber;

/** An object that represent a Gradient Stop. Each of colors of a Gradient are represented by a Stop. A Gradient can have as many Stops as you’d like. */
export type GradientStop = _Sketch.GradientStop;

/** An ImageData is a wrapper around a native NSImage. You can access the native NSImage with nsimage or a native NSData representation of the image with nsdata. */
export type ImageData = _Sketch.ImageData;

/** An Object that can imported from a Library. All its properties are read-only. */
export type ImportableObject = _Sketch.ImportableObject;

/** Wrapper classes that are used to represent reusable assets retrieved from a document or globally. */
export type Assets = _Sketch.Assets;

/** Wrapper classes that are used to represent reusable color assets retrieved from a document or globally. */
export type ColorAsset = _Sketch.ColorAsset;

/** A Color that references a Color Variable, which you can use anywhere the API expects a Color object. */
export type Swatch = _Sketch.Swatch;

/** Wrapper classes that are used to represent reusable gradient assets retrieved from a document or globally. */
export type GradientAsset = _Sketch.GradientAsset;

/** An object that represent a Gradient. */
export type Gradient = _Sketch.Gradient;

/** An object that represent the blur of the layer. */
export type Blur = _Sketch.Blur;

/** An object that represent a Fill. color, gradient and pattern will always be defined regardless of the type of the fill. */
export type Fill = _Sketch.Fill;

/** An object that represent a Border. */
export type Border = _Sketch.Border;

/** An object that represent the options that the Borders of the Layer share. */
export type BorderOptions = _Sketch.BorderOptions;

/** An object that represent a Shadow. */
export type Shadow = _Sketch.Shadow;

/**
* The fontAxes property allows you to adjust the parameters, or “axes”, exposed by variable fonts.
* It works by allowing you to get and set an object representing the axes for a Text Layer’s current font. The object will only contain information about the axes supported by the Text Layer’s current font, and these will vary from font to font.
*/
export type FontAxes = _Sketch.FontAxes;

/** The way to save the document. */
export type SaveMode = _Sketch.SaveMode;

/** Enumeration of the available color space settings. */
export type Types = _Sketch.Types;

/** Enumeration of the type of Shared Style. */
export type ShapeType = _Sketch.ShapeType;

/** Enumeration of the type of Shared Style. */
export type PointType = _Sketch.PointType;

/** Enumeration of the available color space settings. */
export type ColorSpace = _Sketch.ColorSpace;

/** Enumeration of the type of a Gradient. */
export type GradientType = _Sketch.GradientType;

/** Enumeration of the line spacing behavior for the text. */
export type LineSpacing = _Sketch.LineSpacing;

/** Enumeration of the alignments of the text. */
export type Alignment = _Sketch.Alignment;

/** Enumeration of the alignments of the text. */
export type VerticalAlignment = _Sketch.VerticalAlignment;

/** Enumeration of the type of Shared Style. Unknown indicates the object is broken and Sketch can’t determine the style type. */
export type StyleType = _Sketch.StyleType;

/** Enumeration of the types of Library. */
export type LibraryType = _Sketch.LibraryType;

/** Enumeration of the types of Importable Objects. */
export type ImportableObjectType = _Sketch.ImportableObjectType;

/** Enumeration of the blending mode. */
export type BlendingMode = _Sketch.BlendingMode;

/** Enumeration of the type of a blur. */
export type BlurType = _Sketch.BlurType;

/** Enumeration of the types of fill. */
export type FillType = _Sketch.FillType;

/** Enumeration of the types of pattern fill. */
export type PatternFillType = _Sketch.PatternFillType;

/** Enumeration of the positions of a border. */
export type BorderPosition = _Sketch.BorderPosition;

/** Enumeration of the type of the Arrowhead for line layers. */
export type Arrowhead = _Sketch.Arrowhead;

export type LineEnd = _Sketch.LineEnd;

/** Enumeration of the positions of a border. */
export type LineJoin = _Sketch.LineJoin;

/** Enumeration of the positions of a border. */
export type INPUT_TYPE = _Sketch.INPUT_TYPE;

/**Enumeration of the animation types. */
export type AnimationType = _Sketch.AnimationType;

declare const sketchDefault: Sketch;
export default sketchDefault;
