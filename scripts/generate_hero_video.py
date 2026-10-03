"""
Gemini API / Google Veo Video Generation Script
Generates a realistic portfolio hero video from a reference portrait image
and automatically places the output at public/videos/hero_intro.mp4.
"""

import os
import sys
import time
import argparse
from pathlib import Path

def main():
    parser = argparse.ArgumentParser(description="Generate Portfolio Hero Video using Gemini API (Veo)")
    parser.add_argument("--api-key", default=os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY"),
                        help="Google Gemini API Key (or set GEMINI_API_KEY env var)")
    parser.add_argument("--image", default="e:/portfolio/Confident South Asian Man in Black Hoodie.png",
                        help="Path to source portrait image")
    parser.add_argument("--output", default="e:/portfolio/public/videos/hero_intro.mp4",
                        help="Path where output MP4 will be saved")
    parser.add_argument("--model", default="veo-2.0-generate-001",
                        help="Veo model identifier (e.g. veo-2.0-generate-001 or veo-3.1-generate-preview)")
    args = parser.parse_args()

    api_key = args.api_key
    if not api_key:
        print("\n" + "="*70)
        print("ERROR: No Gemini API Key provided!")
        print("Please provide your API key in one of the following ways:")
        print("  1. Pass it directly: python scripts/generate_hero_video.py --api-key YOUR_API_KEY")
        print("  2. Set env variable: $env:GEMINI_API_KEY=\"YOUR_API_KEY\"")
        print("  3. Get a free API key at: https://aistudio.google.com/app/apikey")
        print("="*70 + "\n")
        api_key = input("Enter your Gemini API key now (or press Enter to exit): ").strip()
        if not api_key:
            sys.exit(1)

    image_path = Path(args.image)
    if not image_path.exists():
        print(f"Error: Reference image not found at {image_path}")
        sys.exit(1)

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    print(f"\n[1/4] Initializing Google GenAI Client with Veo model '{args.model}'...")
    try:
        from google import genai
        from google.genai import types
    except ImportError:
        print("Error: 'google-genai' package is not installed. Please run: pip install google-genai pillow")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    print(f"[2/4] Loading reference portrait '{image_path.name}'...")
    image_input = types.Image.from_file(location=str(image_path))
    print("      Loaded image successfully.")

    prompt = (
        "Photorealistic professional portrait video of the exact same young South Asian man with short dark hair, "
        "well-groomed beard, and black hooded sweatshirt from the reference image. The subject is centered in the "
        "frame with generous 15-20% pure-white #FFFFFF empty studio space on both the left and right sides. "
        "Starting from the reference pose, he takes one subtle, confident, natural step forward toward the camera while "
        "maintaining his confident arms-crossed stance, shifting weight realistically. High-end fashion studio lighting, "
        "soft subtle shadows under chin, natural breathing and fabric folds on the black hoodie. Calm, friendly, confident "
        "direct eye contact with the camera. Fixed static camera, zero camera movement, completely uniform pure white #FFFFFF "
        "infinity cyclorama background with no floor seam, no vignetting, and no side edge artifacts. Real human cinematography, "
        "4k ultra-sharp detail."
    )

    negative_prompt = (
        "face morphing, identity shift, changing beard, altered facial features, extra limbs, extra fingers, "
        "deformed hands, camera shake, zoom, tilt, pan, blurred edges, gray borders, black lines, floor lines, "
        "wall shadows, colored background, text, watermark, logo, cartoon, cgi, 3d render"
    )

    print("\n[3/4] Requesting video generation from Gemini Veo (Aspect Ratio: 9:16)...")
    print(f"      Prompt: {prompt[:100]}...")

    models_to_try = [
        "veo-2.0-generate-001",
        "veo-3.1-generate-preview",
        "veo-2.0-generate-preview"
    ]
    operation = None
    last_err = None

    for m in models_to_try:
        try:
            print(f"      Attempting generation with model: '{m}'...")
            operation = client.models.generate_videos(
                model=m,
                prompt=prompt,
                image=image_input,
                config=types.GenerateVideosConfig(
                    aspect_ratio="9:16",
                    person_generation="allow_adult",
                    negative_prompt=negative_prompt,
                ),
            )
            print(f"      Generation initiated successfully on model '{m}'!")
            break
        except Exception as e:
            print(f"      Notice: Model '{m}' returned: {e}")
            last_err = e

    if not operation:
        print(f"\nFailed to initiate generation: {last_err}")
        sys.exit(1)

    print("\n[4/4] Polling video generation operation (this usually takes 1-3 minutes)...")
    start_time = time.time()
    while not operation.done:
        elapsed = int(time.time() - start_time)
        print(f"      Still generating... ({elapsed}s elapsed)")
        time.sleep(15)
        operation = client.operations.get(operation)

    if hasattr(operation, "error") and operation.error:
        print(f"Generation error: {operation.error}")
        sys.exit(1)

    print(f"\nVideo generation complete in {int(time.time() - start_time)} seconds!")
    
    generated_videos = operation.response.generated_videos
    if not generated_videos:
        print("No generated videos returned in response.")
        sys.exit(1)

    video = generated_videos[0]
    print(f"Downloading video to: {output_path}...")
    client.files.download(file=video.video)
    video.video.save(str(output_path))
    
    print("\n" + "="*70)
    print(f"SUCCESS! Hero video saved to: {output_path}")
    print("Your portfolio development server at http://localhost:3000 will now")
    print("automatically display your new seamless, zero-border hero video!")
    print("="*70 + "\n")

if __name__ == "__main__":
    main()
